/* eslint-disable no-unused-expressions */
// import "./App.css";
import { useState } from "react";
import {
  IndexTable,
  TextStyle,
  Card,
  Button,
  useIndexResourceState,
  TextField,
} from "@shopify/polaris";
import { times, reduce } from "lodash";
import { useFormatAsset } from "./useFormatAsset";
import cssShort from "./test-assets/css-short";
import cssMedium from "./test-assets/css-medium";
import cssLong from "./test-assets/css-long";

const NUM_ITERATIONS = 100;

function App() {
  const [numIterations, setNumIterations] = useState(NUM_ITERATIONS);
  const [benchmarkResults, setBenchmarkResults] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const { getFormattedAsset } = useFormatAsset();

  const benchmarkConfigs = [
    {
      title: "CSS short (~330 lines unformatted)",
      extension: "css",
      input: cssShort,
    },
    {
      title: "CSS medium (~650 lines unformatted)",
      extension: "css",
      input: cssMedium,
    },
    {
      title: "CSS Long (~1500 lines unformatted)",
      extension: "css",
      input: cssLong,
    },
  ];

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(benchmarkConfigs);

  const runTest = async ({ title, input, extension }, numIterations) => {
    console.log("Running test", { input, numIterations });

    const raw = await Promise.all(
      times(numIterations, (i) => {
        return new Promise((resolve) => {
          console.log("promise", i);
          const before = Date.now();
          getFormattedAsset(input, extension);
          const after = Date.now();

          return resolve(after - before);
        });
      })
    );

    return {
      title,
      avgTime: reduce(raw, (sum, n) => sum + n, 0) / raw.length,
      slowestTime: Math.max(...raw),
      fastestTime: Math.min(...raw),
    };
  };

  const handleRunBenchmark = async () => {
    console.log("Running benchmark...");
    setIsRunning(true);

    const results = await Promise.all(
      benchmarkConfigs.map((config) => runTest(config, numIterations))
    );

    console.log("Benchmark results", results);
    setBenchmarkResults(results);
    setIsRunning(false);
  };

  return (
    <div>
      {benchmarkResults.length === 0 ? (
        <div>
          <TextField
            label="Number of iterations"
            value={numIterations}
            onChange={setNumIterations}
          />
          <Button onClick={handleRunBenchmark}>Run Benchmark</Button>
        </div>
      ) : null}
      <Card>
        {benchmarkResults.length ? (
          <IndexTable
            itemCount={benchmarkConfigs.length}
            selectedItemsCount={
              allResourcesSelected ? "All" : selectedResources.length
            }
            onSelectionChange={handleSelectionChange}
            headings={[
              { title: "Language" },
              { title: "Avg time (MS)" },
              { title: "Slowest time (MS)" },
              { title: "Fastest time (MS)" },
            ]}
            selectable={false}
          >
            {benchmarkResults.map(
              ({ title, avgTime, slowestTime, fastestTime }, index) => (
                <IndexTable.Row id={index} key={index} position={index}>
                  <IndexTable.Cell>
                    <TextStyle variation="strong">{title}</TextStyle>
                  </IndexTable.Cell>
                  <IndexTable.Cell>{avgTime}</IndexTable.Cell>
                  <IndexTable.Cell>{slowestTime}</IndexTable.Cell>
                  <IndexTable.Cell>{fastestTime}</IndexTable.Cell>
                </IndexTable.Row>
              )
            )}
          </IndexTable>
        ) : null}
      </Card>
    </div>
  );
}

export default App;
