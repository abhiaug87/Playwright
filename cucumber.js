let options = ["--require-module ts-node/register", "--require ./support/*.steps.ts", "--format progress"].join(" ");

let run_features = ["./Features/", options].join(" ");

module.exports = {
  test_runner: run_features,
};
