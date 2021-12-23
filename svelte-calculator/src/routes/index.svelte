<script>
import ButtonPanel from '../components/ButtonPanel.svelte'
import Display from '../components/Display.svelte';
import calculate from 'src/logic/calculate';
export let state = {
  total: null,
  next: null,
  operation: null
}

</script>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <link rel="icon" href="/favicon.ico">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  %svelte.head%
</head>
<body>
	<div id="svelte">%svelte.body%</div>
    <div class="component-app">
      <Display value={calculate.next || calculate.total || "0"} />
      <ButtonPanel/>
    </div>
</body>
</html>

<style>
  .component-app {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
}
</style>
//TODO Finish building calc.  Use dapr quickstart for inspiration