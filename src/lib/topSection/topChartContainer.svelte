<script>
  import * as d3 from "d3";
  import { LayerCake, Html } from "layercake";

  import ClevelandDotPlot from "./dotChart.svelte";
  import AxisX from "./AxisX.svelte";
  import AxisY from "./AxisY.svelte";

  export let data;
  export let xKey = "";
  export let top10XMax = 0;
  const yKey = "opponent";

  const seriesColors = ["#66C2A4", "#6E6E6E", "#9DACD2", "#FDBD7E","#00A7E1"];
</script>

<figure class="w-full h-[350px] p-6 relative">
  <h5>Who are the best player against which team?: when hover show tooltip+pic. when clicked, focus on the player</h5>
  <LayerCake
    ssr
    percentRange
    padding={{ right: 10, bottom: 20, left: 120, top: 28 }}
    x={xKey}
    y={yKey}
    yScale={d3.scaleBand().paddingInner(0.05).round(true)}
    xDomain={[0, top10XMax]}
    xPadding={[2, 0]}
    zScale={d3.scaleOrdinal()}
    zDomain={yKey}
    zRange={seriesColors}
    {data}
  >
    <Html>
      <AxisX />
      <AxisY  />
      <ClevelandDotPlot />
    </Html>
  </LayerCake>
</figure>

<style>
  /*
      The wrapper div needs to have an explicit width and height in CSS.
      It can also be a flexbox child or CSS grid element.
      The point being it needs dimensions since the <LayerCake> element will
      expand to fill it.
    */


  h5 {
    cursor: crosshair;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    color: #222;
    font-family: AtlasGrotesk, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 700;
    position: absolute;
    font-size: 18px;
    top: 28px;
    left: 20px;
  }
</style>
