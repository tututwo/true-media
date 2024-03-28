<!--
	@component
	Generates an SVG bar chart.
 -->
<script>
  import { descending, sort } from "d3";
  import { getContext } from "svelte";

  const { data, xGet, yGet, xScale, yScale,config } = getContext("LayerCake");

  /** @type {String} [fill='#00bbff'] – The shape's fill color. This is technically optional because it comes with a default value but you'll likely want to replace it with your own color. */
  export let fill = "#AAAAAA";
  export let stroke = "none";
  export let flip = false;
  $: if ($xScale && flip) {
    $xScale.range([$xScale.range()[1], $xScale.range()[0]]);
  }
 
  $: if ($data) {
    const sorted = [...$data].sort((a, b) => descending(+a.value, +b.value));
    const yDomain = sorted.map(d => d[$config.y]);
    $yScale.domain(yDomain);
  }
</script>

<g class="bar-group">
  {#each $data as d, i (d.original_col)}

    <rect
      class="group-rect"
      data-id={i}
      x={flip ? $xGet(d) : $xScale.range()[0]}
      y={$yGet(d)}
      height={$yScale.bandwidth() * .3}
      width={flip ? $xScale.range()[0] - $xGet(d) : $xGet(d)}
      {stroke}
      {fill}
    ></rect>
  {/each}
</g>
