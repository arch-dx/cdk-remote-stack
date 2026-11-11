const { awscdk } = require('projen');

const PROJECT_NAME = '@arch-dx/cdk-remote-stack';
const PROJECT_DESCRIPTION = 'Get outputs and AWS SSM parameters from cross-region AWS CloudFormation stacks';

const project = new awscdk.AwsCdkConstructLibrary({
  authorName: 'Pahud Hsieh',
  authorEmail: 'pahudnet@gmail.com',
  name: PROJECT_NAME,
  description: PROJECT_DESCRIPTION,
  repository: 'https://github.com/arch-dx/cdk-remote-stack.git',
  npmRegistryUrl: 'https://npm.pkg.github.com',
  authorUrl: 'https://twitter.com/pahudnet',
  keywords: [
    'aws',
    'remote',
    'cross-region',
    'cross-stack',
    'cross-account',
  ],
  /**
   * we default release the main branch(cdkv2) with major version 2.
   */
  majorVersion: 2,
  defaultReleaseBranch: 'main',
  /**
    * we also release the cdkv1 branch with major version 1.
    */
  // releaseBranches: {
  //   cdkv1: { npmDistTag: 'cdkv1', majorVersion: 1 },
  // },
  // the fork keeps only the build and release workflows
  depsUpgrade: false,
  githubOptions: {
    pullRequestLint: false,
  },
  catalog: {
    twitter: 'pahudnet',
    announce: false,
  },
  cdkVersion: '2.273.0',
  // aws-cdk-lib 2.273.0 needs constructs ^10.5.0 as its peer dependency
  constructsVersion: '10.5.0',
  // jsii 1.x cannot read the aws-cdk-lib 2.273.0 assembly
  jsiiVersion: '~5.9.0',
  // jsii 5.9 and aws-cdk-lib 2.273.0 need node >= 20
  workflowNodeVersion: '22.x',
});

const common_exclude = ['cdk.out', 'cdk.context.json', 'yarn-error.log'];
project.npmignore.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);

// actions/upload-artifact@v4 は 4.4.0 から既定で隠しファイルを上げない。build-artifact（dist）はリポジトリの
// 写しで、.projen/tasks.json が抜けると package-js・release_npm の `npx projen package:js` が Unknown command で落ちる
for (const [workflowName, jobId] of [['build', 'build'], ['release', 'release']]) {
  const workflow = project.github.tryFindWorkflow(workflowName);
  // steps は synth のときに解決する関数で持つことがある
  const { steps } = workflow.getJob(jobId);
  const resolvedSteps = typeof steps === 'function' ? steps() : steps;
  const index = resolvedSteps.findIndex((step) => step.uses?.startsWith('actions/upload-artifact@') && step.with?.name === 'build-artifact');
  if (index < 0) {
    throw new Error(`${workflowName} の ${jobId} に build-artifact の upload-artifact が見つからない`);
  }
  workflow.file.addOverride(`jobs.${jobId}.steps.${index}.with.include-hidden-files`, true);
}

project.synth();
