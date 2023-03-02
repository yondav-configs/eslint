<a id="readme-top"></a>

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<!-- HEADER -->

<div align="center">
  <h1 align="center">@yondav-configs/eslint-config</h1>
  <p align="center">A collection of eslint configurations</p>
</div>
<br />

<!-- TABLE OF CONTENTS -->

<details open>
  <summary style="font-size: 18px;">Table of Contents</summary>
  <ol style="list-style-type: none;">
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li>
          <a href="#installation">Installation</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li>
          <a href="#node">Node</a>
        </li>
        <li>
          <a href="#react">React</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#rules">Rules</a>
      <ul>
        <li>
          <a href="#eslint">ESlint</a><ul><li>
        <a href="#best-practices">Best Practices</a>
      </li><li>
        <a href="#errors">Errors</a>
      </li><li>
        <a href="#es6">Es6</a>
      </li><li>
        <a href="#node">Node</a>
      </li><li>
        <a href="#strict">Strict</a>
      </li><li>
        <a href="#style">Style</a>
      </li><li>
        <a href="#variables">Variables</a>
      </li>
    </ul>
        </li>
        <li>
          <a href="#import">Import</a>
        </li>
        <li>
          <a href="#react">React</a><ul><li>
        <a href="#core">Core</a>
      </li><li>
        <a href="#jsx-a11y">JSX A11y</a>
      </li><li>
        <a href="#react-hooks">React Hooks</a>
      </li>
    </ul>
        </li>
        <li>
          <a href="#typescript">Typescript</a><ul><li>
        <a href="#core">Core</a>
      </li><li>
        <a href="#react">React</a>
      </li>
    </ul>
        </li>
      </ul>
    </li>
  </ol>
</details>
<br/>

<!-- GETTING STARTED -->

  ## Getting Started

  <!-- INSTALLATION -->

  ### Installation

  ```
  # npm
  npm install @yondav-configs/eslint-config

  # yarn
  yarn add @yondav-configs/eslint-config
  ```


  <p align="right">[ <a href="#readme-top">back to top</a> ]</p>

<!-- USAGE -->

  ## Usage

  
  <!-- PLACEHOLDER -->


  <p align="right">[ <a href="#readme-top">back to top</a> ]</p>

<!-- RULES -->

  ## Rules

  
  <!-- ESLINT RULES -->

  ### ESlint

<!--BEST PRACTICES RULES --> 

<details open>
  <summary>Best Practices</summary>

  | Rule        | Assignment |
  | ----------- | ----------- |
  | <a href="https://eslint.org/docs/latest/rules//accessor-pairs" target="_blank">accessor-pairs</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//array-callback-return" target="_blank">array-callback-return</a> | ```["error",{"allowImplicit":true}]``` |
| <a href="https://eslint.org/docs/latest/rules//block-scoped-var" target="_blank">block-scoped-var</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//complexity" target="_blank">complexity</a> | ```["off",20]``` |
| <a href="https://eslint.org/docs/latest/rules//class-methods-use-this" target="_blank">class-methods-use-this</a> | ```["error",{"exceptMethods":[]}]``` |
| <a href="https://eslint.org/docs/latest/rules//consistent-return" target="_blank">consistent-return</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//default-case" target="_blank">default-case</a> | ```["error",{"commentPattern":"^no default$"}]``` |
| <a href="https://eslint.org/docs/latest/rules//default-case-last" target="_blank">default-case-last</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//default-param-last" target="_blank">default-param-last</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//dot-notation" target="_blank">dot-notation</a> | ```["error",{"allowKeywords":true}]``` |
| <a href="https://eslint.org/docs/latest/rules//dot-location" target="_blank">dot-location</a> | ```["error","property"]``` |
| <a href="https://eslint.org/docs/latest/rules//eqeqeq" target="_blank">eqeqeq</a> | ```["error","always",{"null":"ignore"}]``` |
| <a href="https://eslint.org/docs/latest/rules//grouped-accessor-pairs" target="_blank">grouped-accessor-pairs</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//guard-for-in" target="_blank">guard-for-in</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//max-classes-per-file" target="_blank">max-classes-per-file</a> | ```["error",1]``` |
| <a href="https://eslint.org/docs/latest/rules//no-alert" target="_blank">no-alert</a> | ```"warn"``` |
| <a href="https://eslint.org/docs/latest/rules//no-caller" target="_blank">no-caller</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-case-declarations" target="_blank">no-case-declarations</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-constructor-return" target="_blank">no-constructor-return</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-div-regex" target="_blank">no-div-regex</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//no-else-return" target="_blank">no-else-return</a> | ```["error",{"allowElseIf":false}]``` |
| <a href="https://eslint.org/docs/latest/rules//no-empty-function" target="_blank">no-empty-function</a> | ```["error",{"allow":["arrowFunctions","functions","methods"]}]``` |
| <a href="https://eslint.org/docs/latest/rules//no-empty-pattern" target="_blank">no-empty-pattern</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-eq-null" target="_blank">no-eq-null</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//no-eval" target="_blank">no-eval</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-extend-native" target="_blank">no-extend-native</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-extra-bind" target="_blank">no-extra-bind</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-extra-label" target="_blank">no-extra-label</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-fallthrough" target="_blank">no-fallthrough</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-floating-decimal" target="_blank">no-floating-decimal</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-global-assign" target="_blank">no-global-assign</a> | ```["error",{"exceptions":[]}]``` |
| <a href="https://eslint.org/docs/latest/rules//no-native-reassign" target="_blank">no-native-reassign</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//no-implicit-coercion" target="_blank">no-implicit-coercion</a> | ```["off",{"boolean":false,"number":true,"string":true,"allow":[]}]``` |
| <a href="https://eslint.org/docs/latest/rules//no-implicit-globals" target="_blank">no-implicit-globals</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//no-implied-eval" target="_blank">no-implied-eval</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-invalid-this" target="_blank">no-invalid-this</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//no-iterator" target="_blank">no-iterator</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-labels" target="_blank">no-labels</a> | ```["error",{"allowLoop":false,"allowSwitch":false}]``` |
| <a href="https://eslint.org/docs/latest/rules//no-lone-blocks" target="_blank">no-lone-blocks</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-loop-func" target="_blank">no-loop-func</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-magic-numbers" target="_blank">no-magic-numbers</a> | ```["off",{"ignore":[],"ignoreArrayIndexes":true,"enforceConst":true,"detectObjects":false}]``` |
| <a href="https://eslint.org/docs/latest/rules//no-multi-spaces" target="_blank">no-multi-spaces</a> | ```["error",{"ignoreEOLComments":false}]``` |
| <a href="https://eslint.org/docs/latest/rules//no-multi-str" target="_blank">no-multi-str</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-new" target="_blank">no-new</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-new-func" target="_blank">no-new-func</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-new-wrappers" target="_blank">no-new-wrappers</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-nonoctal-decimal-escape" target="_blank">no-nonoctal-decimal-escape</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-octal" target="_blank">no-octal</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-octal-escape" target="_blank">no-octal-escape</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-param-reassign" target="_blank">no-param-reassign</a> | ```["error",{"props":true,"ignorePropertyModificationsFor":["acc","accumulator","e","ctx","context","req","request","res","response","$scope","staticContext"]}]``` |
| <a href="https://eslint.org/docs/latest/rules//no-proto" target="_blank">no-proto</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-redeclare" target="_blank">no-redeclare</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-restricted-properties" target="_blank">no-restricted-properties</a> | ```["error",{"object":"arguments","property":"callee","message":"arguments.callee is deprecated"},{"object":"global","property":"isFinite","message":"Please use Number.isFinite instead"},{"object":"self","property":"isFinite","message":"Please use Number.isFinite instead"},{"object":"window","property":"isFinite","message":"Please use Number.isFinite instead"},{"object":"global","property":"isNaN","message":"Please use Number.isNaN instead"},{"object":"self","property":"isNaN","message":"Please use Number.isNaN instead"},{"object":"window","property":"isNaN","message":"Please use Number.isNaN instead"},{"property":"__defineGetter__","message":"Please use Object.defineProperty instead."},{"property":"__defineSetter__","message":"Please use Object.defineProperty instead."},{"object":"Math","property":"pow","message":"Use the exponentiation operator (**) instead."}]``` |
| <a href="https://eslint.org/docs/latest/rules//no-return-assign" target="_blank">no-return-assign</a> | ```["error","always"]``` |
| <a href="https://eslint.org/docs/latest/rules//no-return-await" target="_blank">no-return-await</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-script-url" target="_blank">no-script-url</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-self-assign" target="_blank">no-self-assign</a> | ```["error",{"props":true}]``` |
| <a href="https://eslint.org/docs/latest/rules//no-self-compare" target="_blank">no-self-compare</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-sequences" target="_blank">no-sequences</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-throw-literal" target="_blank">no-throw-literal</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-unmodified-loop-condition" target="_blank">no-unmodified-loop-condition</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//no-unused-expressions" target="_blank">no-unused-expressions</a> | ```["error",{"allowShortCircuit":false,"allowTernary":false,"allowTaggedTemplates":false}]``` |
| <a href="https://eslint.org/docs/latest/rules//no-unused-labels" target="_blank">no-unused-labels</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-useless-call" target="_blank">no-useless-call</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//no-useless-catch" target="_blank">no-useless-catch</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-useless-concat" target="_blank">no-useless-concat</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-useless-escape" target="_blank">no-useless-escape</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-useless-return" target="_blank">no-useless-return</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-void" target="_blank">no-void</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-warning-comments" target="_blank">no-warning-comments</a> | ```["off",{"terms":["todo","fixme","xxx"],"location":"start"}]``` |
| <a href="https://eslint.org/docs/latest/rules//no-with" target="_blank">no-with</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//prefer-promise-reject-errors" target="_blank">prefer-promise-reject-errors</a> | ```["error",{"allowEmptyReject":true}]``` |
| <a href="https://eslint.org/docs/latest/rules//prefer-named-capture-group" target="_blank">prefer-named-capture-group</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//prefer-regex-literals" target="_blank">prefer-regex-literals</a> | ```["error",{"disallowRedundantWrapping":true}]``` |
| <a href="https://eslint.org/docs/latest/rules//radix" target="_blank">radix</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//require-await" target="_blank">require-await</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//require-unicode-regexp" target="_blank">require-unicode-regexp</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//vars-on-top" target="_blank">vars-on-top</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//wrap-iife" target="_blank">wrap-iife</a> | ```["error","outside",{"functionPrototypeMethods":false}]``` |
| <a href="https://eslint.org/docs/latest/rules//yoda" target="_blank">yoda</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-console" target="_blank">no-console</a> | ```["warn",{"allow":["warn","error"]}]``` |
  <p align="right">[ <a href="#readme-top">back to top</a> ]</p>
</details>

<!--ERRORS RULES --> 

<details open>
  <summary>Errors</summary>

  | Rule        | Assignment |
  | ----------- | ----------- |
  | <a href="https://eslint.org/docs/latest/rules//for-direction" target="_blank">for-direction</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//getter-return" target="_blank">getter-return</a> | ```["error",{"allowImplicit":true}]``` |
| <a href="https://eslint.org/docs/latest/rules//no-async-promise-executor" target="_blank">no-async-promise-executor</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-await-in-loop" target="_blank">no-await-in-loop</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-compare-neg-zero" target="_blank">no-compare-neg-zero</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-cond-assign" target="_blank">no-cond-assign</a> | ```["error","always"]``` |
| <a href="https://eslint.org/docs/latest/rules//no-console" target="_blank">no-console</a> | ```"warn"``` |
| <a href="https://eslint.org/docs/latest/rules//no-constant-condition" target="_blank">no-constant-condition</a> | ```"warn"``` |
| <a href="https://eslint.org/docs/latest/rules//no-control-regex" target="_blank">no-control-regex</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-debugger" target="_blank">no-debugger</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-dupe-args" target="_blank">no-dupe-args</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-dupe-else-if" target="_blank">no-dupe-else-if</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-dupe-keys" target="_blank">no-dupe-keys</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-duplicate-case" target="_blank">no-duplicate-case</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-empty" target="_blank">no-empty</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-empty-character-class" target="_blank">no-empty-character-class</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-ex-assign" target="_blank">no-ex-assign</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-extra-boolean-cast" target="_blank">no-extra-boolean-cast</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-extra-parens" target="_blank">no-extra-parens</a> | ```["off","all",{"conditionalAssign":true,"nestedBinaryExpressions":false,"returnAssign":false,"ignoreJSX":"all","enforceForArrowConditionals":false}]``` |
| <a href="https://eslint.org/docs/latest/rules//no-extra-semi" target="_blank">no-extra-semi</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-func-assign" target="_blank">no-func-assign</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-import-assign" target="_blank">no-import-assign</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-inner-declarations" target="_blank">no-inner-declarations</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-invalid-regexp" target="_blank">no-invalid-regexp</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-irregular-whitespace" target="_blank">no-irregular-whitespace</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-loss-of-precision" target="_blank">no-loss-of-precision</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-misleading-character-class" target="_blank">no-misleading-character-class</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-obj-calls" target="_blank">no-obj-calls</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-promise-executor-return" target="_blank">no-promise-executor-return</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-prototype-builtins" target="_blank">no-prototype-builtins</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-regex-spaces" target="_blank">no-regex-spaces</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-setter-return" target="_blank">no-setter-return</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-sparse-arrays" target="_blank">no-sparse-arrays</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-template-curly-in-string" target="_blank">no-template-curly-in-string</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-unexpected-multiline" target="_blank">no-unexpected-multiline</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-unreachable" target="_blank">no-unreachable</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-unreachable-loop" target="_blank">no-unreachable-loop</a> | ```["error",{"ignore":[]}]``` |
| <a href="https://eslint.org/docs/latest/rules//no-unsafe-finally" target="_blank">no-unsafe-finally</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-unsafe-negation" target="_blank">no-unsafe-negation</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-unsafe-optional-chaining" target="_blank">no-unsafe-optional-chaining</a> | ```["error",{"disallowArithmeticOperators":true}]``` |
| <a href="https://eslint.org/docs/latest/rules//no-unused-private-class-members" target="_blank">no-unused-private-class-members</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//no-useless-backreference" target="_blank">no-useless-backreference</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-negated-in-lhs" target="_blank">no-negated-in-lhs</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//require-atomic-updates" target="_blank">require-atomic-updates</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//use-isnan" target="_blank">use-isnan</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//valid-jsdoc" target="_blank">valid-jsdoc</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//valid-typeof" target="_blank">valid-typeof</a> | ```["error",{"requireStringLiterals":true}]``` |
  <p align="right">[ <a href="#readme-top">back to top</a> ]</p>
</details>

<!--ES6 RULES --> 

<details open>
  <summary>Es6</summary>

  | Rule        | Assignment |
  | ----------- | ----------- |
  | <a href="https://eslint.org/docs/latest/rules//arrow-body-style" target="_blank">arrow-body-style</a> | ```["error","as-needed",{"requireReturnForObjectLiteral":false}]``` |
| <a href="https://eslint.org/docs/latest/rules//arrow-parens" target="_blank">arrow-parens</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//arrow-spacing" target="_blank">arrow-spacing</a> | ```["error",{"before":true,"after":true}]``` |
| <a href="https://eslint.org/docs/latest/rules//constructor-super" target="_blank">constructor-super</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//generator-star-spacing" target="_blank">generator-star-spacing</a> | ```["error",{"before":false,"after":true}]``` |
| <a href="https://eslint.org/docs/latest/rules//no-class-assign" target="_blank">no-class-assign</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-confusing-arrow" target="_blank">no-confusing-arrow</a> | ```["error",{"allowParens":true}]``` |
| <a href="https://eslint.org/docs/latest/rules//no-const-assign" target="_blank">no-const-assign</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-dupe-class-members" target="_blank">no-dupe-class-members</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-duplicate-imports" target="_blank">no-duplicate-imports</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//no-new-symbol" target="_blank">no-new-symbol</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-restricted-exports" target="_blank">no-restricted-exports</a> | ```["error",{"restrictedNamedExports":["default","then"]}]``` |
| <a href="https://eslint.org/docs/latest/rules//no-restricted-imports" target="_blank">no-restricted-imports</a> | ```["off",{"paths":[],"patterns":[]}]``` |
| <a href="https://eslint.org/docs/latest/rules//no-this-before-super" target="_blank">no-this-before-super</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-useless-computed-key" target="_blank">no-useless-computed-key</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-useless-constructor" target="_blank">no-useless-constructor</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-useless-rename" target="_blank">no-useless-rename</a> | ```["error",{"ignoreDestructuring":false,"ignoreImport":false,"ignoreExport":false}]``` |
| <a href="https://eslint.org/docs/latest/rules//no-var" target="_blank">no-var</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//object-shorthand" target="_blank">object-shorthand</a> | ```["error","always",{"ignoreConstructors":false,"avoidQuotes":true}]``` |
| <a href="https://eslint.org/docs/latest/rules//prefer-arrow-callback" target="_blank">prefer-arrow-callback</a> | ```["error",{"allowNamedFunctions":false,"allowUnboundThis":true}]``` |
| <a href="https://eslint.org/docs/latest/rules//prefer-const" target="_blank">prefer-const</a> | ```["error",{"destructuring":"any","ignoreReadBeforeAssign":true}]``` |
| <a href="https://eslint.org/docs/latest/rules//prefer-destructuring" target="_blank">prefer-destructuring</a> | ```["error",{"VariableDeclarator":{"array":false,"object":true},"AssignmentExpression":{"array":true,"object":false}},{"enforceForRenamedProperties":false}]``` |
| <a href="https://eslint.org/docs/latest/rules//prefer-numeric-literals" target="_blank">prefer-numeric-literals</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//prefer-reflect" target="_blank">prefer-reflect</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//prefer-rest-params" target="_blank">prefer-rest-params</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//prefer-spread" target="_blank">prefer-spread</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//prefer-template" target="_blank">prefer-template</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//require-yield" target="_blank">require-yield</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//rest-spread-spacing" target="_blank">rest-spread-spacing</a> | ```["error","never"]``` |
| <a href="https://eslint.org/docs/latest/rules//sort-imports" target="_blank">sort-imports</a> | ```["off",{"ignoreCase":false,"ignoreDeclarationSort":false,"ignoreMemberSort":false,"memberSyntaxSortOrder":["none","all","multiple","single"]}]``` |
| <a href="https://eslint.org/docs/latest/rules//symbol-description" target="_blank">symbol-description</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//template-curly-spacing" target="_blank">template-curly-spacing</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//yield-star-spacing" target="_blank">yield-star-spacing</a> | ```["error","after"]``` |
  <p align="right">[ <a href="#readme-top">back to top</a> ]</p>
</details>

<!--NODE RULES --> 

<details open>
  <summary>Node</summary>

  | Rule        | Assignment |
  | ----------- | ----------- |
  | <a href="https://eslint.org/docs/latest/rules//callback-return" target="_blank">callback-return</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//global-require" target="_blank">global-require</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//handle-callback-err" target="_blank">handle-callback-err</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//no-buffer-constructor" target="_blank">no-buffer-constructor</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-mixed-requires" target="_blank">no-mixed-requires</a> | ```["off",false]``` |
| <a href="https://eslint.org/docs/latest/rules//no-new-require" target="_blank">no-new-require</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-path-concat" target="_blank">no-path-concat</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-process-env" target="_blank">no-process-env</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//no-process-exit" target="_blank">no-process-exit</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//no-restricted-modules" target="_blank">no-restricted-modules</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//no-sync" target="_blank">no-sync</a> | ```"off"``` |
  <p align="right">[ <a href="#readme-top">back to top</a> ]</p>
</details>

<!--STRICT RULES --> 

<details open>
  <summary>Strict</summary>

  | Rule        | Assignment |
  | ----------- | ----------- |
  | <a href="https://eslint.org/docs/latest/rules//strict" target="_blank">strict</a> | ```["error","never"]``` |
  <p align="right">[ <a href="#readme-top">back to top</a> ]</p>
</details>

<!--STYLE RULES --> 

<details open>
  <summary>Style</summary>

  | Rule        | Assignment |
  | ----------- | ----------- |
  | <a href="https://eslint.org/docs/latest/rules//array-bracket-newline" target="_blank">array-bracket-newline</a> | ```["error",{"multiline":true}]``` |
| <a href="https://eslint.org/docs/latest/rules//array-bracket-spacing" target="_blank">array-bracket-spacing</a> | ```["error","always"]``` |
| <a href="https://eslint.org/docs/latest/rules//array-element-newline" target="_blank">array-element-newline</a> | ```["error",{"multiline":true,"minItems":3}]``` |
| <a href="https://eslint.org/docs/latest/rules//block-spacing" target="_blank">block-spacing</a> | ```["error","always"]``` |
| <a href="https://eslint.org/docs/latest/rules//brace-style" target="_blank">brace-style</a> | ```["error","1tbs",{"allowSingleLine":false}]``` |
| <a href="https://eslint.org/docs/latest/rules//camelcase" target="_blank">camelcase</a> | ```["error",{"properties":"never","ignoreDestructuring":false}]``` |
| <a href="https://eslint.org/docs/latest/rules//capitalized-comments" target="_blank">capitalized-comments</a> | ```["off","never",{"line":{"ignorePattern":".*","ignoreInlineComments":true,"ignoreConsecutiveComments":true},"block":{"ignorePattern":".*","ignoreInlineComments":true,"ignoreConsecutiveComments":true}}]``` |
| <a href="https://eslint.org/docs/latest/rules//comma-spacing" target="_blank">comma-spacing</a> | ```["error",{"before":false,"after":true}]``` |
| <a href="https://eslint.org/docs/latest/rules//comma-style" target="_blank">comma-style</a> | ```["error","last",{"exceptions":{"ArrayExpression":false,"ArrayPattern":false,"ArrowFunctionExpression":false,"CallExpression":false,"FunctionDeclaration":false,"FunctionExpression":false,"ImportDeclaration":false,"ObjectExpression":false,"ObjectPattern":false,"VariableDeclaration":false,"NewExpression":false}}]``` |
| <a href="https://eslint.org/docs/latest/rules//computed-property-spacing" target="_blank">computed-property-spacing</a> | ```["error","never"]``` |
| <a href="https://eslint.org/docs/latest/rules//consistent-this" target="_blank">consistent-this</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//eol-last" target="_blank">eol-last</a> | ```["error","always"]``` |
| <a href="https://eslint.org/docs/latest/rules//function-call-argument-newline" target="_blank">function-call-argument-newline</a> | ```["error","consistent"]``` |
| <a href="https://eslint.org/docs/latest/rules//func-call-spacing" target="_blank">func-call-spacing</a> | ```["error","never"]``` |
| <a href="https://eslint.org/docs/latest/rules//func-name-matching" target="_blank">func-name-matching</a> | ```["off","always",{"includeCommonJSModuleExports":false,"considerPropertyDescriptor":true}]``` |
| <a href="https://eslint.org/docs/latest/rules//func-names" target="_blank">func-names</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//func-style" target="_blank">func-style</a> | ```["off","expression"]``` |
| <a href="https://eslint.org/docs/latest/rules//id-denylist" target="_blank">id-denylist</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//id-length" target="_blank">id-length</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//id-match" target="_blank">id-match</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//implicit-arrow-linebreak" target="_blank">implicit-arrow-linebreak</a> | ```["error","beside"]``` |
| <a href="https://eslint.org/docs/latest/rules//indent" target="_blank">indent</a> | ```["error",2,{"SwitchCase":1,"VariableDeclarator":1,"outerIIFEBody":1,"FunctionDeclaration":{"parameters":1,"body":1},"FunctionExpression":{"parameters":1,"body":1},"CallExpression":{"arguments":1},"ArrayExpression":1,"ObjectExpression":1,"ImportDeclaration":1,"flatTernaryExpressions":false,"ignoredNodes":["JSXElement","JSXElement > *","JSXAttribute","JSXIdentifier","JSXNamespacedName","JSXMemberExpression","JSXSpreadAttribute","JSXExpressionContainer","JSXOpeningElement","JSXClosingElement","JSXFragment","JSXOpeningFragment","JSXClosingFragment","JSXText","JSXEmptyExpression","JSXSpreadChild"],"ignoreComments":false}]``` |
| <a href="https://eslint.org/docs/latest/rules//jsx-quotes" target="_blank">jsx-quotes</a> | ```["error","prefer-double"]``` |
| <a href="https://eslint.org/docs/latest/rules//key-spacing" target="_blank">key-spacing</a> | ```["error",{"beforeColon":false,"afterColon":true}]``` |
| <a href="https://eslint.org/docs/latest/rules//keyword-spacing" target="_blank">keyword-spacing</a> | ```["error",{"before":true,"after":true,"overrides":{"return":{"after":true},"throw":{"after":true},"case":{"after":true}}}]``` |
| <a href="https://eslint.org/docs/latest/rules//line-comment-position" target="_blank">line-comment-position</a> | ```["off",{"position":"above","ignorePattern":"","applyDefaultPatterns":true}]``` |
| <a href="https://eslint.org/docs/latest/rules//linebreak-style" target="_blank">linebreak-style</a> | ```["error","unix"]``` |
| <a href="https://eslint.org/docs/latest/rules//lines-between-class-members" target="_blank">lines-between-class-members</a> | ```["error","always",{"exceptAfterSingleLine":false}]``` |
| <a href="https://eslint.org/docs/latest/rules//lines-around-comment" target="_blank">lines-around-comment</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//lines-around-directive" target="_blank">lines-around-directive</a> | ```["error",{"before":"always","after":"always"}]``` |
| <a href="https://eslint.org/docs/latest/rules//max-depth" target="_blank">max-depth</a> | ```["off",4]``` |
| <a href="https://eslint.org/docs/latest/rules//max-len" target="_blank">max-len</a> | ```["error",80,2,{"ignoreUrls":true,"ignoreComments":false,"ignoreRegExpLiterals":true,"ignoreStrings":true,"ignoreTemplateLiterals":true}]``` |
| <a href="https://eslint.org/docs/latest/rules//max-lines" target="_blank">max-lines</a> | ```["off",{"max":300,"skipBlankLines":true,"skipComments":true}]``` |
| <a href="https://eslint.org/docs/latest/rules//max-lines-per-function" target="_blank">max-lines-per-function</a> | ```["off",{"max":50,"skipBlankLines":true,"skipComments":true,"IIFEs":true}]``` |
| <a href="https://eslint.org/docs/latest/rules//max-nested-callbacks" target="_blank">max-nested-callbacks</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//max-params" target="_blank">max-params</a> | ```["off",3]``` |
| <a href="https://eslint.org/docs/latest/rules//max-statements" target="_blank">max-statements</a> | ```["off",10]``` |
| <a href="https://eslint.org/docs/latest/rules//max-statements-per-line" target="_blank">max-statements-per-line</a> | ```["off",{"max":1}]``` |
| <a href="https://eslint.org/docs/latest/rules//multiline-comment-style" target="_blank">multiline-comment-style</a> | ```["off","starred-block"]``` |
| <a href="https://eslint.org/docs/latest/rules//multiline-ternary" target="_blank">multiline-ternary</a> | ```["off","never"]``` |
| <a href="https://eslint.org/docs/latest/rules//new-cap" target="_blank">new-cap</a> | ```["error",{"newIsCap":true,"newIsCapExceptions":[],"capIsNew":false,"capIsNewExceptions":["Immutable.Map","Immutable.Set","Immutable.List"]}]``` |
| <a href="https://eslint.org/docs/latest/rules//new-parens" target="_blank">new-parens</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//newline-after-var" target="_blank">newline-after-var</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//newline-before-return" target="_blank">newline-before-return</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//newline-per-chained-call" target="_blank">newline-per-chained-call</a> | ```["error",{"ignoreChainWithDepth":4}]``` |
| <a href="https://eslint.org/docs/latest/rules//no-array-constructor" target="_blank">no-array-constructor</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-bitwise" target="_blank">no-bitwise</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-continue" target="_blank">no-continue</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-inline-comments" target="_blank">no-inline-comments</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//no-lonely-if" target="_blank">no-lonely-if</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-mixed-operators" target="_blank">no-mixed-operators</a> | ```["error",{"groups":[["%","**"],["%","+"],["%","-"],["%","*"],["%","/"],["/","*"],["&","|","<<",">>",">>>"],["==","!=","===","!=="],["&&","||"]],"allowSamePrecedence":false}]``` |
| <a href="https://eslint.org/docs/latest/rules//no-mixed-spaces-and-tabs" target="_blank">no-mixed-spaces-and-tabs</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-multi-assign" target="_blank">no-multi-assign</a> | ```["error"]``` |
| <a href="https://eslint.org/docs/latest/rules//no-multiple-empty-lines" target="_blank">no-multiple-empty-lines</a> | ```["error",{"max":1,"maxBOF":0,"maxEOF":0}]``` |
| <a href="https://eslint.org/docs/latest/rules//no-negated-condition" target="_blank">no-negated-condition</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//no-nested-ternary" target="_blank">no-nested-ternary</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-new-object" target="_blank">no-new-object</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-plusplus" target="_blank">no-plusplus</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-restricted-syntax" target="_blank">no-restricted-syntax</a> | ```["error",{"selector":"ForInStatement","message":"for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."},{"selector":"ForOfStatement","message":"iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations."},{"selector":"LabeledStatement","message":"Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."},{"selector":"WithStatement","message":"`with` is disallowed in strict mode because it makes code impossible to predict and optimize."}]``` |
| <a href="https://eslint.org/docs/latest/rules//no-spaced-func" target="_blank">no-spaced-func</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-tabs" target="_blank">no-tabs</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-ternary" target="_blank">no-ternary</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//no-trailing-spaces" target="_blank">no-trailing-spaces</a> | ```["error",{"skipBlankLines":false,"ignoreComments":false}]``` |
| <a href="https://eslint.org/docs/latest/rules//no-underscore-dangle" target="_blank">no-underscore-dangle</a> | ```["error",{"allow":[],"allowAfterThis":false,"allowAfterSuper":false,"enforceInMethodNames":true}]``` |
| <a href="https://eslint.org/docs/latest/rules//no-unneeded-ternary" target="_blank">no-unneeded-ternary</a> | ```["error",{"defaultAssignment":false}]``` |
| <a href="https://eslint.org/docs/latest/rules//no-whitespace-before-property" target="_blank">no-whitespace-before-property</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//object-curly-spacing" target="_blank">object-curly-spacing</a> | ```["error","always"]``` |
| <a href="https://eslint.org/docs/latest/rules//object-curly-newline" target="_blank">object-curly-newline</a> | ```["error",{"ObjectExpression":{"minProperties":4,"multiline":true,"consistent":true},"ObjectPattern":{"minProperties":4,"multiline":true,"consistent":true},"ImportDeclaration":{"minProperties":4,"multiline":true,"consistent":true},"ExportDeclaration":{"minProperties":4,"multiline":true,"consistent":true}}]``` |
| <a href="https://eslint.org/docs/latest/rules//object-property-newline" target="_blank">object-property-newline</a> | ```["error",{"allowAllPropertiesOnSameLine":true}]``` |
| <a href="https://eslint.org/docs/latest/rules//one-var" target="_blank">one-var</a> | ```["error","never"]``` |
| <a href="https://eslint.org/docs/latest/rules//one-var-declaration-per-line" target="_blank">one-var-declaration-per-line</a> | ```["error","always"]``` |
| <a href="https://eslint.org/docs/latest/rules//operator-assignment" target="_blank">operator-assignment</a> | ```["error","always"]``` |
| <a href="https://eslint.org/docs/latest/rules//operator-linebreak" target="_blank">operator-linebreak</a> | ```["error","before",{"overrides":{"=":"none"}}]``` |
| <a href="https://eslint.org/docs/latest/rules//padded-blocks" target="_blank">padded-blocks</a> | ```["error",{"blocks":"never","classes":"never","switches":"never"},{"allowSingleLineBlocks":true}]``` |
| <a href="https://eslint.org/docs/latest/rules//padding-line-between-statements" target="_blank">padding-line-between-statements</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//prefer-exponentiation-operator" target="_blank">prefer-exponentiation-operator</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//prefer-object-spread" target="_blank">prefer-object-spread</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//quote-props" target="_blank">quote-props</a> | ```["error","as-needed",{"keywords":false,"unnecessary":true,"numbers":false}]``` |
| <a href="https://eslint.org/docs/latest/rules//quotes" target="_blank">quotes</a> | ```["error","single",{"avoidEscape":true}]``` |
| <a href="https://eslint.org/docs/latest/rules//require-jsdoc" target="_blank">require-jsdoc</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//semi" target="_blank">semi</a> | ```["error","always"]``` |
| <a href="https://eslint.org/docs/latest/rules//semi-spacing" target="_blank">semi-spacing</a> | ```["error",{"before":false,"after":true}]``` |
| <a href="https://eslint.org/docs/latest/rules//semi-style" target="_blank">semi-style</a> | ```["error","last"]``` |
| <a href="https://eslint.org/docs/latest/rules//sort-keys" target="_blank">sort-keys</a> | ```["off","asc",{"caseSensitive":false,"natural":true}]``` |
| <a href="https://eslint.org/docs/latest/rules//sort-vars" target="_blank">sort-vars</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//space-before-blocks" target="_blank">space-before-blocks</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//space-before-function-paren" target="_blank">space-before-function-paren</a> | ```["error",{"anonymous":"always","named":"never","asyncArrow":"always"}]``` |
| <a href="https://eslint.org/docs/latest/rules//space-in-parens" target="_blank">space-in-parens</a> | ```["error","never"]``` |
| <a href="https://eslint.org/docs/latest/rules//space-infix-ops" target="_blank">space-infix-ops</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//space-unary-ops" target="_blank">space-unary-ops</a> | ```["error",{"words":true,"nonwords":false,"overrides":{}}]``` |
| <a href="https://eslint.org/docs/latest/rules//spaced-comment" target="_blank">spaced-comment</a> | ```["error","always",{"line":{"exceptions":["-","+"],"markers":["=","!","/"]},"block":{"exceptions":["-","+"],"markers":["=","!",":","::"],"balanced":true}}]``` |
| <a href="https://eslint.org/docs/latest/rules//switch-colon-spacing" target="_blank">switch-colon-spacing</a> | ```["error",{"after":true,"before":false}]``` |
| <a href="https://eslint.org/docs/latest/rules//template-tag-spacing" target="_blank">template-tag-spacing</a> | ```["error","never"]``` |
| <a href="https://eslint.org/docs/latest/rules//unicode-bom" target="_blank">unicode-bom</a> | ```["error","never"]``` |
| <a href="https://eslint.org/docs/latest/rules//wrap-regex" target="_blank">wrap-regex</a> | ```"off"``` |
  <p align="right">[ <a href="#readme-top">back to top</a> ]</p>
</details>

<!--VARIABLES RULES --> 

<details open>
  <summary>Variables</summary>

  | Rule        | Assignment |
  | ----------- | ----------- |
  | <a href="https://eslint.org/docs/latest/rules//init-declarations" target="_blank">init-declarations</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//no-catch-shadow" target="_blank">no-catch-shadow</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//no-delete-var" target="_blank">no-delete-var</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-label-var" target="_blank">no-label-var</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-restricted-globals" target="_blank">no-restricted-globals</a> | ```["error",{"name":"isFinite","message":"Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite"},{"name":"isNaN","message":"Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan"},"addEventListener","blur","close","closed","confirm","defaultStatus","defaultstatus","event","external","find","focus","frameElement","frames","history","innerHeight","innerWidth","length","location","locationbar","menubar","moveBy","moveTo","name","onblur","onerror","onfocus","onload","onresize","onunload","open","opener","opera","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","print","removeEventListener","resizeBy","resizeTo","screen","screenLeft","screenTop","screenX","screenY","scroll","scrollbars","scrollBy","scrollTo","scrollX","scrollY","self","status","statusbar","stop","toolbar","top"]``` |
| <a href="https://eslint.org/docs/latest/rules//no-shadow" target="_blank">no-shadow</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-shadow-restricted-names" target="_blank">no-shadow-restricted-names</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-undef" target="_blank">no-undef</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-undef-init" target="_blank">no-undef-init</a> | ```"error"``` |
| <a href="https://eslint.org/docs/latest/rules//no-undefined" target="_blank">no-undefined</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//no-unused-vars" target="_blank">no-unused-vars</a> | ```["error",{"vars":"all","args":"after-used","ignoreRestSiblings":true}]``` |
| <a href="https://eslint.org/docs/latest/rules//no-use-before-define" target="_blank">no-use-before-define</a> | ```["error",{"functions":true,"classes":true,"variables":true}]``` |
  <p align="right">[ <a href="#readme-top">back to top</a> ]</p>
</details>


  <!-- IMPORT RULES -->

  ### Import



<details open>
  <summary>Rules</summary>

  | Rule        | Assignment |
  | ----------- | ----------- |
  | <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//no-unresolved..md" target="_blank">import/no-unresolved</a> | ```["error",{"commonjs":true,"caseSensitive":true}]``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//named..md" target="_blank">import/named</a> | ```"error"``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//default..md" target="_blank">import/default</a> | ```"error"``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//namespace..md" target="_blank">import/namespace</a> | ```"error"``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//export..md" target="_blank">import/export</a> | ```"error"``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//no-named-as-default..md" target="_blank">import/no-named-as-default</a> | ```"error"``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//no-named-as-default-member..md" target="_blank">import/no-named-as-default-member</a> | ```"error"``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//no-deprecated..md" target="_blank">import/no-deprecated</a> | ```"off"``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//no-extraneous-dependencies..md" target="_blank">import/no-extraneous-dependencies</a> | ```["error",{"devDependencies":[".config/**","test/**","tests/**","spec/**","**/__tests__/**","**/__mocks__/**","test.{js,jsx}","test-*.{js,jsx}","**/*{.,_}{test,spec}.{js,jsx}","**/jest.config.js","**/jest.setup.js","**/vue.config.js","**/webpack.config.js","**/webpack.config.*.js","**/rollup.config.js","**/rollup.config.*.js","**/gulpfile.js","**/gulpfile.*.js","**/Gruntfile{,.js}","**/protractor.conf.js","**/protractor.conf.*.js","**/karma.conf.js","**/.eslintrc.js"],"optionalDependencies":false}]``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//no-mutable-exports..md" target="_blank">import/no-mutable-exports</a> | ```"error"``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//no-commonjs..md" target="_blank">import/no-commonjs</a> | ```"off"``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//no-amd..md" target="_blank">import/no-amd</a> | ```"off"``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//no-nodejs-modules..md" target="_blank">import/no-nodejs-modules</a> | ```"off"``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//first..md" target="_blank">import/first</a> | ```["error","absolute-first"]``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//imports-first..md" target="_blank">import/imports-first</a> | ```"off"``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//no-duplicates..md" target="_blank">import/no-duplicates</a> | ```"off"``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//no-namespace..md" target="_blank">import/no-namespace</a> | ```"error"``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//extensions..md" target="_blank">import/extensions</a> | ```["error","ignorePackages",{"js":"never","mjs":"never","jsx":"never"}]``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//order..md" target="_blank">import/order</a> | ```["error",{"alphabetize":{"order":"asc"},"groups":["builtin","external","internal","parent","sibling","index"],"newlines-between":"always","warnOnUnassignedImports":true}]``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//newline-after-import..md" target="_blank">import/newline-after-import</a> | ```"error"``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//prefer-default-export..md" target="_blank">import/prefer-default-export</a> | ```"off"``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//no-restricted-paths..md" target="_blank">import/no-restricted-paths</a> | ```"off"``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//max-dependencies..md" target="_blank">import/max-dependencies</a> | ```["warn",{"ignoreTypeImports":true}]``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//no-absolute-path..md" target="_blank">import/no-absolute-path</a> | ```"error"``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//no-dynamic-require..md" target="_blank">import/no-dynamic-require</a> | ```"error"``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//no-internal-modules..md" target="_blank">import/no-internal-modules</a> | ```["off",{"allow":[]}]``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//no-webpack-loader-syntax..md" target="_blank">import/no-webpack-loader-syntax</a> | ```"error"``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//no-unassigned-import..md" target="_blank">import/no-unassigned-import</a> | ```"off"``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//no-named-default..md" target="_blank">import/no-named-default</a> | ```"error"``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//no-anonymous-default-export..md" target="_blank">import/no-anonymous-default-export</a> | ```"error"``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//exports-last..md" target="_blank">import/exports-last</a> | ```"error"``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//group-exports..md" target="_blank">import/group-exports</a> | ```"error"``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//no-default-export..md" target="_blank">import/no-default-export</a> | ```"off"``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//no-named-export..md" target="_blank">import/no-named-export</a> | ```"off"``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//no-self-import..md" target="_blank">import/no-self-import</a> | ```"error"``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//no-cycle..md" target="_blank">import/no-cycle</a> | ```["error",{"maxDepth":"∞"}]``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//no-useless-path-segments..md" target="_blank">import/no-useless-path-segments</a> | ```["error",{"commonjs":true}]``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//dynamic-import-chunkname..md" target="_blank">import/dynamic-import-chunkname</a> | ```["off",{"importFunctions":[],"webpackChunknameFormat":"[0-9a-zA-Z-_/.]+"}]``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//no-relative-parent-imports..md" target="_blank">import/no-relative-parent-imports</a> | ```"off"``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//no-unused-modules..md" target="_blank">import/no-unused-modules</a> | ```["off",{"ignoreExports":[],"missingExports":true,"unusedExports":true}]``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//no-import-module-exports..md" target="_blank">import/no-import-module-exports</a> | ```["error",{"exceptions":[]}]``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//no-relative-packages..md" target="_blank">import/no-relative-packages</a> | ```"error"``` |
  <p align="right">[ <a href="#readme-top">back to top</a> ]</p>
</details>


  <!-- REACT RULES -->

  ### React

<!--CORE RULES --> 

<details open>
  <summary>Core</summary>

  | Rule        | Assignment |
  | ----------- | ----------- |
  | <a href="https://eslint.org/docs/latest/rules//no-underscore-dangle" target="_blank">no-underscore-dangle</a> | ```["error",{"allow":["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"],"allowAfterThis":false,"allowAfterSuper":false,"enforceInMethodNames":true}]``` |
| <a href="https://eslint.org/docs/latest/rules//class-methods-use-this" target="_blank">class-methods-use-this</a> | ```["error",{"exceptMethods":["render","getInitialState","getDefaultProps","getChildContext","componentWillMount","UNSAFE_componentWillMount","componentDidMount","componentWillReceiveProps","UNSAFE_componentWillReceiveProps","shouldComponentUpdate","componentWillUpdate","UNSAFE_componentWillUpdate","componentDidUpdate","componentWillUnmount","componentDidCatch","getSnapshotBeforeUpdate"]}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/display-name.md" target="_blank">react/display-name</a> | ```["off",{"ignoreTranspilerName":false}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-prop-types.md" target="_blank">react/forbid-prop-types</a> | ```["error",{"forbid":["any","array","object"],"checkContextTypes":true,"checkChildContextTypes":true}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-dom-props.md" target="_blank">react/forbid-dom-props</a> | ```["off",{"forbid":[]}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-boolean-value.md" target="_blank">react/jsx-boolean-value</a> | ```["error","never",{"always":[]}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-closing-bracket-location.md" target="_blank">react/jsx-closing-bracket-location</a> | ```["error","line-aligned"]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-closing-tag-location.md" target="_blank">react/jsx-closing-tag-location</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-spacing.md" target="_blank">react/jsx-curly-spacing</a> | ```["error","never",{"allowMultiline":true}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-handler-names.md" target="_blank">react/jsx-handler-names</a> | ```["off",{"eventHandlerPrefix":"handle","eventHandlerPropPrefix":"on"}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-indent-props.md" target="_blank">react/jsx-indent-props</a> | ```["error",2]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-key.md" target="_blank">react/jsx-key</a> | ```"off"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-max-props-per-line.md" target="_blank">react/jsx-max-props-per-line</a> | ```["error",{"maximum":1,"when":"multiline"}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-bind.md" target="_blank">react/jsx-no-bind</a> | ```["error",{"ignoreRefs":true,"allowArrowFunctions":true,"allowFunctions":false,"allowBind":false,"ignoreDOMComponents":true}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-duplicate-props.md" target="_blank">react/jsx-no-duplicate-props</a> | ```["error",{"ignoreCase":true}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-literals.md" target="_blank">react/jsx-no-literals</a> | ```["off",{"noStrings":true}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-undef.md" target="_blank">react/jsx-no-undef</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-pascal-case.md" target="_blank">react/jsx-pascal-case</a> | ```["error",{"allowAllCaps":true,"ignore":[]}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-prop-types.md" target="_blank">react/sort-prop-types</a> | ```["off",{"ignoreCase":true,"callbacksLast":false,"requiredFirst":false,"sortShapeProp":true}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-sort-prop-types.md" target="_blank">react/jsx-sort-prop-types</a> | ```"off"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-sort-props.md" target="_blank">react/jsx-sort-props</a> | ```["off",{"ignoreCase":true,"callbacksLast":false,"shorthandFirst":false,"shorthandLast":false,"noSortAlphabetically":false,"reservedFirst":true}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-sort-default-props.md" target="_blank">react/jsx-sort-default-props</a> | ```["off",{"ignoreCase":true}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-uses-react.md" target="_blank">react/jsx-uses-react</a> | ```["error"]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-uses-vars.md" target="_blank">react/jsx-uses-vars</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-danger.md" target="_blank">react/no-danger</a> | ```"warn"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-deprecated.md" target="_blank">react/no-deprecated</a> | ```["error"]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-did-mount-set-state.md" target="_blank">react/no-did-mount-set-state</a> | ```"off"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-did-update-set-state.md" target="_blank">react/no-did-update-set-state</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-will-update-set-state.md" target="_blank">react/no-will-update-set-state</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-direct-mutation-state.md" target="_blank">react/no-direct-mutation-state</a> | ```"off"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-is-mounted.md" target="_blank">react/no-is-mounted</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-multi-comp.md" target="_blank">react/no-multi-comp</a> | ```"off"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-set-state.md" target="_blank">react/no-set-state</a> | ```"off"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-string-refs.md" target="_blank">react/no-string-refs</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unknown-property.md" target="_blank">react/no-unknown-property</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-es6-class.md" target="_blank">react/prefer-es6-class</a> | ```["error","always"]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-stateless-function.md" target="_blank">react/prefer-stateless-function</a> | ```["error",{"ignorePureComponents":true}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prop-types.md" target="_blank">react/prop-types</a> | ```["error",{"ignore":[],"customValidators":[],"skipUndeclared":false}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/react-in-jsx-scope.md" target="_blank">react/react-in-jsx-scope</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-render-return.md" target="_blank">react/require-render-return</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/self-closing-comp.md" target="_blank">react/self-closing-comp</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-comp.md" target="_blank">react/sort-comp</a> | ```["error",{"order":["static-variables","static-methods","instance-variables","lifecycle","/^handle.+$/","/^on.+$/","getters","setters","/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/","instance-methods","everything-else","rendering"],"groups":{"lifecycle":["displayName","propTypes","contextTypes","childContextTypes","mixins","statics","defaultProps","constructor","getDefaultProps","getInitialState","state","getChildContext","getDerivedStateFromProps","componentWillMount","UNSAFE_componentWillMount","componentDidMount","componentWillReceiveProps","UNSAFE_componentWillReceiveProps","shouldComponentUpdate","componentWillUpdate","UNSAFE_componentWillUpdate","getSnapshotBeforeUpdate","componentDidUpdate","componentDidCatch","componentWillUnmount"],"rendering":["/^render.+$/","render"]}}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-wrap-multilines.md" target="_blank">react/jsx-wrap-multilines</a> | ```["error",{"declaration":"parens-new-line","assignment":"parens-new-line","return":"parens-new-line","arrow":"parens-new-line","condition":"parens-new-line","logical":"parens-new-line","prop":"parens-new-line"}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-first-prop-new-line.md" target="_blank">react/jsx-first-prop-new-line</a> | ```["error","multiline-multiprop"]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-equals-spacing.md" target="_blank">react/jsx-equals-spacing</a> | ```["error","never"]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-indent.md" target="_blank">react/jsx-indent</a> | ```["error",2]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-target-blank.md" target="_blank">react/jsx-no-target-blank</a> | ```["error",{"enforceDynamicLinks":"always"}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-filename-extension.md" target="_blank">react/jsx-filename-extension</a> | ```["error",{"extensions":[".jsx"]}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-comment-textnodes.md" target="_blank">react/jsx-no-comment-textnodes</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-render-return-value.md" target="_blank">react/no-render-return-value</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-optimization.md" target="_blank">react/require-optimization</a> | ```["off",{"allowDecorators":[]}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-find-dom-node.md" target="_blank">react/no-find-dom-node</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-component-props.md" target="_blank">react/forbid-component-props</a> | ```["off",{"forbid":[]}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-elements.md" target="_blank">react/forbid-elements</a> | ```["off",{"forbid":[]}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-danger-with-children.md" target="_blank">react/no-danger-with-children</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-prop-types.md" target="_blank">react/no-unused-prop-types</a> | ```["error",{"customValidators":[],"skipShapeProps":true}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/style-prop-object.md" target="_blank">react/style-prop-object</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unescaped-entities.md" target="_blank">react/no-unescaped-entities</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-children-prop.md" target="_blank">react/no-children-prop</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-tag-spacing.md" target="_blank">react/jsx-tag-spacing</a> | ```["error",{"closingSlash":"never","beforeSelfClosing":"always","afterOpening":"never","beforeClosing":"never"}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-space-before-closing.md" target="_blank">react/jsx-space-before-closing</a> | ```["off","always"]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-array-index-key.md" target="_blank">react/no-array-index-key</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-default-props.md" target="_blank">react/require-default-props</a> | ```["error",{"forbidDefaultForRequired":true}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-foreign-prop-types.md" target="_blank">react/forbid-foreign-prop-types</a> | ```["warn",{"allowInPropTypes":true}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/void-dom-elements-no-children.md" target="_blank">react/void-dom-elements-no-children</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/default-props-match-prop-types.md" target="_blank">react/default-props-match-prop-types</a> | ```["error",{"allowRequiredDefaults":false}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-redundant-should-component-update.md" target="_blank">react/no-redundant-should-component-update</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-state.md" target="_blank">react/no-unused-state</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/boolean-prop-naming.md" target="_blank">react/boolean-prop-naming</a> | ```["off",{"propTypeNames":["bool","mutuallyExclusiveTrueProps"],"rule":"^(is|has)[A-Z]([A-Za-z0-9]?)+","message":""}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-typos.md" target="_blank">react/no-typos</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-brace-presence.md" target="_blank">react/jsx-curly-brace-presence</a> | ```["error",{"props":"never","children":"never"}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-one-expression-per-line.md" target="_blank">react/jsx-one-expression-per-line</a> | ```["error",{"allow":"single-child"}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/destructuring-assignment.md" target="_blank">react/destructuring-assignment</a> | ```["error","always"]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-access-state-in-setstate.md" target="_blank">react/no-access-state-in-setstate</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/button-has-type.md" target="_blank">react/button-has-type</a> | ```["error",{"button":true,"submit":true,"reset":false}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-child-element-spacing.md" target="_blank">react/jsx-child-element-spacing</a> | ```"off"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-this-in-sfc.md" target="_blank">react/no-this-in-sfc</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-max-depth.md" target="_blank">react/jsx-max-depth</a> | ```"off"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-multi-spaces.md" target="_blank">react/jsx-props-no-multi-spaces</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unsafe.md" target="_blank">react/no-unsafe</a> | ```"off"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-fragments.md" target="_blank">react/jsx-fragments</a> | ```["error","syntax"]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-newline.md" target="_blank">react/jsx-curly-newline</a> | ```["error",{"multiline":"consistent","singleline":"consistent"}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/state-in-constructor.md" target="_blank">react/state-in-constructor</a> | ```["error","always"]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/static-property-placement.md" target="_blank">react/static-property-placement</a> | ```["error","property assignment"]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-spreading.md" target="_blank">react/jsx-props-no-spreading</a> | ```["error",{"html":"enforce","custom":"enforce","explicitSpread":"ignore","exceptions":[]}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-read-only-props.md" target="_blank">react/prefer-read-only-props</a> | ```"off"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-script-url.md" target="_blank">react/jsx-no-script-url</a> | ```["error",[{"name":"Link","props":["to"]}]]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-useless-fragment.md" target="_blank">react/jsx-no-useless-fragment</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-adjacent-inline-elements.md" target="_blank">react/no-adjacent-inline-elements</a> | ```"off"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/function-component-definition.md" target="_blank">react/function-component-definition</a> | ```["error",{"namedComponents":["function-declaration","function-expression"],"unnamedComponents":"function-expression"}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-newline.md" target="_blank">react/jsx-newline</a> | ```"off"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-constructed-context-values.md" target="_blank">react/jsx-no-constructed-context-values</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unstable-nested-components.md" target="_blank">react/no-unstable-nested-components</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-namespace.md" target="_blank">react/no-namespace</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-exact-props.md" target="_blank">react/prefer-exact-props</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-arrow-function-lifecycle.md" target="_blank">react/no-arrow-function-lifecycle</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-invalid-html-attribute.md" target="_blank">react/no-invalid-html-attribute</a> | ```"error"``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-class-component-methods.md" target="_blank">react/no-unused-class-component-methods</a> | ```"error"``` |
  <p align="right">[ <a href="#readme-top">back to top</a> ]</p>
</details>

<!--JSX A11Y RULES --> 

<details open>
  <summary>JSX A11y</summary>

  | Rule        | Assignment |
  | ----------- | ----------- |
  | <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//accessible-emoji.md" target="_blank">jsx-a11y/accessible-emoji</a> | ```"off"``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//alt-text.md" target="_blank">jsx-a11y/alt-text</a> | ```["error",{"elements":["img","object","area","input[type=\"image\"]"],"img":[],"object":[],"area":[],"input[type=\"image\"]":[]}]``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//anchor-has-content.md" target="_blank">jsx-a11y/anchor-has-content</a> | ```["error",{"components":[]}]``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//anchor-is-valid.md" target="_blank">jsx-a11y/anchor-is-valid</a> | ```["error",{"components":["Link"],"specialLink":["to"],"aspects":["noHref","invalidHref","preferButton"]}]``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//aria-activedescendant-has-tabindex.md" target="_blank">jsx-a11y/aria-activedescendant-has-tabindex</a> | ```"error"``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//aria-props.md" target="_blank">jsx-a11y/aria-props</a> | ```"error"``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//aria-proptypes.md" target="_blank">jsx-a11y/aria-proptypes</a> | ```"error"``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//aria-role.md" target="_blank">jsx-a11y/aria-role</a> | ```["error",{"ignoreNonDOM":false}]``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//aria-unsupported-elements.md" target="_blank">jsx-a11y/aria-unsupported-elements</a> | ```"error"``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//autocomplete-valid.md" target="_blank">jsx-a11y/autocomplete-valid</a> | ```["off",{"inputComponents":[]}]``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//click-events-have-key-events.md" target="_blank">jsx-a11y/click-events-have-key-events</a> | ```"error"``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//control-has-associated-label.md" target="_blank">jsx-a11y/control-has-associated-label</a> | ```["error",{"labelAttributes":["label"],"controlComponents":[],"ignoreElements":["audio","canvas","embed","input","textarea","tr","video"],"ignoreRoles":["grid","listbox","menu","menubar","radiogroup","row","tablist","toolbar","tree","treegrid"],"depth":5}]``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//heading-has-content.md" target="_blank">jsx-a11y/heading-has-content</a> | ```["error",{"components":[""]}]``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//html-has-lang.md" target="_blank">jsx-a11y/html-has-lang</a> | ```"error"``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//iframe-has-title.md" target="_blank">jsx-a11y/iframe-has-title</a> | ```"error"``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//img-redundant-alt.md" target="_blank">jsx-a11y/img-redundant-alt</a> | ```"error"``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//interactive-supports-focus.md" target="_blank">jsx-a11y/interactive-supports-focus</a> | ```"error"``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//label-has-associated-control.md" target="_blank">jsx-a11y/label-has-associated-control</a> | ```["error",{"labelComponents":[],"labelAttributes":[],"controlComponents":[],"assert":"both","depth":25}]``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//lang.md" target="_blank">jsx-a11y/lang</a> | ```"error"``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//media-has-caption.md" target="_blank">jsx-a11y/media-has-caption</a> | ```["error",{"audio":[],"video":[],"track":[]}]``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//mouse-events-have-key-events.md" target="_blank">jsx-a11y/mouse-events-have-key-events</a> | ```"error"``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//no-access-key.md" target="_blank">jsx-a11y/no-access-key</a> | ```"error"``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//no-autofocus.md" target="_blank">jsx-a11y/no-autofocus</a> | ```["error",{"ignoreNonDOM":true}]``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//no-distracting-elements.md" target="_blank">jsx-a11y/no-distracting-elements</a> | ```["error",{"elements":["marquee","blink"]}]``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//no-interactive-element-to-noninteractive-role.md" target="_blank">jsx-a11y/no-interactive-element-to-noninteractive-role</a> | ```["error",{"tr":["none","presentation"]}]``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//no-noninteractive-element-interactions.md" target="_blank">jsx-a11y/no-noninteractive-element-interactions</a> | ```["error",{"handlers":["onClick","onMouseDown","onMouseUp","onKeyPress","onKeyDown","onKeyUp"]}]``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//no-noninteractive-element-to-interactive-role.md" target="_blank">jsx-a11y/no-noninteractive-element-to-interactive-role</a> | ```["error",{"ul":["listbox","menu","menubar","radiogroup","tablist","tree","treegrid"],"ol":["listbox","menu","menubar","radiogroup","tablist","tree","treegrid"],"li":["menuitem","option","row","tab","treeitem"],"table":["grid"],"td":["gridcell"]}]``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//no-noninteractive-tabindex.md" target="_blank">jsx-a11y/no-noninteractive-tabindex</a> | ```["error",{"tags":[],"roles":["tabpanel"]}]``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//no-onchange.md" target="_blank">jsx-a11y/no-onchange</a> | ```"off"``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//no-redundant-roles.md" target="_blank">jsx-a11y/no-redundant-roles</a> | ```"error"``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//no-static-element-interactions.md" target="_blank">jsx-a11y/no-static-element-interactions</a> | ```["error",{"handlers":["onClick","onMouseDown","onMouseUp","onKeyPress","onKeyDown","onKeyUp"]}]``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//role-has-required-aria-props.md" target="_blank">jsx-a11y/role-has-required-aria-props</a> | ```"error"``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//role-supports-aria-props.md" target="_blank">jsx-a11y/role-supports-aria-props</a> | ```"error"``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//scope.md" target="_blank">jsx-a11y/scope</a> | ```"error"``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//tabindex-no-positive.md" target="_blank">jsx-a11y/tabindex-no-positive</a> | ```"error"``` |
| <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules//label-has-for.md" target="_blank">jsx-a11y/label-has-for</a> | ```["off",{"components":[],"required":{"every":["nesting","id"]},"allowChildren":false}]``` |
  <p align="right">[ <a href="#readme-top">back to top</a> ]</p>
</details>

<!--REACT HOOKS RULES --> 

<details open>
  <summary>React Hooks</summary>

  | Rule        | Assignment |
  | ----------- | ----------- |
  | <a href="https://reactjs.org/docs/hooks-rules.html/undefined" target="_blank">react-hooks/rules-of-hooks</a> | ```"error"``` |
| <a href="https://reactjs.org/docs/hooks-rules.html/undefined" target="_blank">react-hooks/exhaustive-deps</a> | ```"error"``` |
  <p align="right">[ <a href="#readme-top">back to top</a> ]</p>
</details>


  <!-- TYPESCRIPT RULES -->

  ### Typescript

<!--CORE RULES --> 

<details open>
  <summary>Core</summary>

  | Rule        | Assignment |
  | ----------- | ----------- |
  | <a href="https://typescript-eslint.io/rules//consistent-type-imports" target="_blank">@typescript-eslint/consistent-type-imports</a> | ```"error"``` |
| <a href="https://typescript-eslint.io/rules//explicit-member-accessibility" target="_blank">@typescript-eslint/explicit-member-accessibility</a> | ```"off"``` |
| <a href="https://typescript-eslint.io/rules//no-object-literal-type-assertion" target="_blank">@typescript-eslint/no-object-literal-type-assertion</a> | ```"off"``` |
| <a href="https://typescript-eslint.io/rules//no-shadow" target="_blank">@typescript-eslint/no-shadow</a> | ```["error"]``` |
| <a href="https://typescript-eslint.io/rules//no-unused-vars" target="_blank">@typescript-eslint/no-unused-vars</a> | ```"error"``` |
| <a href="https://typescript-eslint.io/rules//no-use-before-define" target="_blank">@typescript-eslint/no-use-before-define</a> | ```["error"]``` |
| <a href="https://eslint.org/docs/latest/rules//no-undef" target="_blank">no-undef</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//no-use-before-define" target="_blank">no-use-before-define</a> | ```"off"``` |
| <a href="https://eslint.org/docs/latest/rules//no-shadow" target="_blank">no-shadow</a> | ```"off"``` |
| <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//extensions..md" target="_blank">import/extensions</a> | ```["error","ignorePackages",{"js":"never","mjs":"never","ts":"never"}]``` |
  <p align="right">[ <a href="#readme-top">back to top</a> ]</p>
</details>

<!--REACT RULES --> 

<details open>
  <summary>React</summary>

  | Rule        | Assignment |
  | ----------- | ----------- |
  | <a href="https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules//extensions..md" target="_blank">import/extensions</a> | ```["error","ignorePackages",{"js":"never","mjs":"never","jsx":"never","ts":"never","tsx":"never"}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-filename-extension.md" target="_blank">react/jsx-filename-extension</a> | ```["error",{"extensions":[".tsx"]}]``` |
| <a href="https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prop-types.md" target="_blank">react/prop-types</a> | ```["off",{}]``` |
  <p align="right">[ <a href="#readme-top">back to top</a> ]</p>
</details>


  

<!-- FOOTER -->

---
<div align="center">
  <p style="color: grey;">&#169; yondav 2023</p>
  <a href="https://yondav.us/" target="_blank" rel="noopener noreferrer">yondav.us</a>
</div>
