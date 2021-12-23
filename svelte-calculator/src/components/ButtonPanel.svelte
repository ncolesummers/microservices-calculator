<script>
import Button from "./Button.svelte";
</script>
<div class="component-button-panel">
  <div>
    <Button name="AC" />
    <Button name="+/-" />
    <Button name="%" />
    <Button name="÷" orange=true />
  </div>
  <div>
    <Button name="7" />
    <Button name="8" />
    <Button name="9" />
    <Button name="x" orange=true />
  </div>
  <div>
    <Button name="4" />
    <Button name="5" />
    <Button name="6" />
    <Button name="-" orange=true />
  </div>
  <div>
    <Button name="1" />
    <Button name="2" />
    <Button name="3" />
    <Button name="+" orange=true />
  </div>
  <div>
    <Button name="0" wide=true />
    <Button name="." />
    <Button name="=" orange=true />
  </div>
</div>
<style>
  .component-button-panel {
  background-color: #858694;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1 0 auto;
}

.component-button-panel > div {
  width: 100%;
  margin-bottom: 1px;
  flex: 1 0 auto;
  display: flex;
}
</style>