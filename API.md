# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RemoteOutputs <a name="RemoteOutputs" id="@arch-dx/cdk-remote-stack.RemoteOutputs"></a>

Represents the RemoteOutputs of the remote CDK stack.

#### Initializers <a name="Initializers" id="@arch-dx/cdk-remote-stack.RemoteOutputs.Initializer"></a>

```typescript
import { RemoteOutputs } from '@arch-dx/cdk-remote-stack'

new RemoteOutputs(scope: Construct, id: string, props: RemoteOutputsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@arch-dx/cdk-remote-stack.RemoteOutputs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@arch-dx/cdk-remote-stack.RemoteOutputs.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@arch-dx/cdk-remote-stack.RemoteOutputs.Initializer.parameter.props">props</a></code> | <code><a href="#@arch-dx/cdk-remote-stack.RemoteOutputsProps">RemoteOutputsProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@arch-dx/cdk-remote-stack.RemoteOutputs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@arch-dx/cdk-remote-stack.RemoteOutputs.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@arch-dx/cdk-remote-stack.RemoteOutputs.Initializer.parameter.props"></a>

- *Type:* <a href="#@arch-dx/cdk-remote-stack.RemoteOutputsProps">RemoteOutputsProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@arch-dx/cdk-remote-stack.RemoteOutputs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@arch-dx/cdk-remote-stack.RemoteOutputs.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@arch-dx/cdk-remote-stack.RemoteOutputs.get">get</a></code> | Get the attribute value from the outputs. |

---

##### `toString` <a name="toString" id="@arch-dx/cdk-remote-stack.RemoteOutputs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@arch-dx/cdk-remote-stack.RemoteOutputs.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@arch-dx/cdk-remote-stack.RemoteOutputs.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `get` <a name="get" id="@arch-dx/cdk-remote-stack.RemoteOutputs.get"></a>

```typescript
public get(key: string): string
```

Get the attribute value from the outputs.

###### `key`<sup>Required</sup> <a name="key" id="@arch-dx/cdk-remote-stack.RemoteOutputs.get.parameter.key"></a>

- *Type:* string

output key.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@arch-dx/cdk-remote-stack.RemoteOutputs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@arch-dx/cdk-remote-stack.RemoteOutputs.isConstruct"></a>

```typescript
import { RemoteOutputs } from '@arch-dx/cdk-remote-stack'

RemoteOutputs.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@arch-dx/cdk-remote-stack.RemoteOutputs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@arch-dx/cdk-remote-stack.RemoteOutputs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@arch-dx/cdk-remote-stack.RemoteOutputs.property.outputs">outputs</a></code> | <code>aws-cdk-lib.CustomResource</code> | The outputs from the remote stack. |

---

##### `node`<sup>Required</sup> <a name="node" id="@arch-dx/cdk-remote-stack.RemoteOutputs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@arch-dx/cdk-remote-stack.RemoteOutputs.property.outputs"></a>

```typescript
public readonly outputs: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

The outputs from the remote stack.

---


### RemoteParameters <a name="RemoteParameters" id="@arch-dx/cdk-remote-stack.RemoteParameters"></a>

Represents the RemoteParameters of the remote CDK stack.

#### Initializers <a name="Initializers" id="@arch-dx/cdk-remote-stack.RemoteParameters.Initializer"></a>

```typescript
import { RemoteParameters } from '@arch-dx/cdk-remote-stack'

new RemoteParameters(scope: Construct, id: string, props: RemoteParametersProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@arch-dx/cdk-remote-stack.RemoteParameters.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@arch-dx/cdk-remote-stack.RemoteParameters.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@arch-dx/cdk-remote-stack.RemoteParameters.Initializer.parameter.props">props</a></code> | <code><a href="#@arch-dx/cdk-remote-stack.RemoteParametersProps">RemoteParametersProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@arch-dx/cdk-remote-stack.RemoteParameters.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@arch-dx/cdk-remote-stack.RemoteParameters.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@arch-dx/cdk-remote-stack.RemoteParameters.Initializer.parameter.props"></a>

- *Type:* <a href="#@arch-dx/cdk-remote-stack.RemoteParametersProps">RemoteParametersProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@arch-dx/cdk-remote-stack.RemoteParameters.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@arch-dx/cdk-remote-stack.RemoteParameters.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@arch-dx/cdk-remote-stack.RemoteParameters.get">get</a></code> | Get the parameter. |

---

##### `toString` <a name="toString" id="@arch-dx/cdk-remote-stack.RemoteParameters.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@arch-dx/cdk-remote-stack.RemoteParameters.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@arch-dx/cdk-remote-stack.RemoteParameters.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `get` <a name="get" id="@arch-dx/cdk-remote-stack.RemoteParameters.get"></a>

```typescript
public get(key: string): string
```

Get the parameter.

###### `key`<sup>Required</sup> <a name="key" id="@arch-dx/cdk-remote-stack.RemoteParameters.get.parameter.key"></a>

- *Type:* string

output key.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@arch-dx/cdk-remote-stack.RemoteParameters.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@arch-dx/cdk-remote-stack.RemoteParameters.isConstruct"></a>

```typescript
import { RemoteParameters } from '@arch-dx/cdk-remote-stack'

RemoteParameters.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@arch-dx/cdk-remote-stack.RemoteParameters.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@arch-dx/cdk-remote-stack.RemoteParameters.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@arch-dx/cdk-remote-stack.RemoteParameters.property.parameters">parameters</a></code> | <code>aws-cdk-lib.CustomResource</code> | The parameters in the SSM parameter store for the remote stack. |

---

##### `node`<sup>Required</sup> <a name="node" id="@arch-dx/cdk-remote-stack.RemoteParameters.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@arch-dx/cdk-remote-stack.RemoteParameters.property.parameters"></a>

```typescript
public readonly parameters: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

The parameters in the SSM parameter store for the remote stack.

---


## Structs <a name="Structs" id="Structs"></a>

### RemoteOutputsProps <a name="RemoteOutputsProps" id="@arch-dx/cdk-remote-stack.RemoteOutputsProps"></a>

Properties of the RemoteOutputs.

#### Initializer <a name="Initializer" id="@arch-dx/cdk-remote-stack.RemoteOutputsProps.Initializer"></a>

```typescript
import { RemoteOutputsProps } from '@arch-dx/cdk-remote-stack'

const remoteOutputsProps: RemoteOutputsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@arch-dx/cdk-remote-stack.RemoteOutputsProps.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The remote CDK stack to get the outputs from. |
| <code><a href="#@arch-dx/cdk-remote-stack.RemoteOutputsProps.property.alwaysUpdate">alwaysUpdate</a></code> | <code>boolean</code> | Indicate whether always update the custom resource to get the new stack output. |
| <code><a href="#@arch-dx/cdk-remote-stack.RemoteOutputsProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | timeout for custom resource handler. |

---

##### `stack`<sup>Required</sup> <a name="stack" id="@arch-dx/cdk-remote-stack.RemoteOutputsProps.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The remote CDK stack to get the outputs from.

---

##### `alwaysUpdate`<sup>Optional</sup> <a name="alwaysUpdate" id="@arch-dx/cdk-remote-stack.RemoteOutputsProps.property.alwaysUpdate"></a>

```typescript
public readonly alwaysUpdate: boolean;
```

- *Type:* boolean
- *Default:* true

Indicate whether always update the custom resource to get the new stack output.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@arch-dx/cdk-remote-stack.RemoteOutputsProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* no timeout specified.

timeout for custom resource handler.

---

### RemoteParametersProps <a name="RemoteParametersProps" id="@arch-dx/cdk-remote-stack.RemoteParametersProps"></a>

Properties of the RemoteParameters.

#### Initializer <a name="Initializer" id="@arch-dx/cdk-remote-stack.RemoteParametersProps.Initializer"></a>

```typescript
import { RemoteParametersProps } from '@arch-dx/cdk-remote-stack'

const remoteParametersProps: RemoteParametersProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@arch-dx/cdk-remote-stack.RemoteParametersProps.property.path">path</a></code> | <code>string</code> | The parameter path. |
| <code><a href="#@arch-dx/cdk-remote-stack.RemoteParametersProps.property.region">region</a></code> | <code>string</code> | The region code of the remote stack. |
| <code><a href="#@arch-dx/cdk-remote-stack.RemoteParametersProps.property.alwaysUpdate">alwaysUpdate</a></code> | <code>boolean</code> | Indicate whether always update the custom resource to get the new stack output. |
| <code><a href="#@arch-dx/cdk-remote-stack.RemoteParametersProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The assumed role used to get remote parameters. |
| <code><a href="#@arch-dx/cdk-remote-stack.RemoteParametersProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | timeout for custom resource handler. |

---

##### `path`<sup>Required</sup> <a name="path" id="@arch-dx/cdk-remote-stack.RemoteParametersProps.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The parameter path.

---

##### `region`<sup>Required</sup> <a name="region" id="@arch-dx/cdk-remote-stack.RemoteParametersProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region code of the remote stack.

---

##### `alwaysUpdate`<sup>Optional</sup> <a name="alwaysUpdate" id="@arch-dx/cdk-remote-stack.RemoteParametersProps.property.alwaysUpdate"></a>

```typescript
public readonly alwaysUpdate: boolean;
```

- *Type:* boolean
- *Default:* true

Indicate whether always update the custom resource to get the new stack output.

---

##### `role`<sup>Optional</sup> <a name="role" id="@arch-dx/cdk-remote-stack.RemoteParametersProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The assumed role used to get remote parameters.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@arch-dx/cdk-remote-stack.RemoteParametersProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* no timeout specified.

timeout for custom resource handler.

---



