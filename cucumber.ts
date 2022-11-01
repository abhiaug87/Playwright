let options = ["--require ./step_definitions/*.ts", "--format progress"].join(
  " "
);

let run_features = ["./Features/*.feature", options].join(" ");

module.exports = {
  test_runner: run_features,
};
