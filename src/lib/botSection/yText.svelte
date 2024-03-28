<script>
  import { getContext } from "svelte";

  const { data, xGet, yGet, xScale, xRange, width, yScale, config } =
    getContext("LayerCake");

  $: tickValues = $data.map((d) => d[$config.y]);

  $: x1 = $xRange[1] - 6;
  $: y = $yScale.bandwidth() / 2;
</script>

<g class="axis y-axis">
  {#each tickValues as tick (tick)}
    {@const tickValPx = $yScale(tick)}
    <g
      class="tick tick-{tick}"
      transform="translate({$xRange[0] +40}, {tickValPx - 22})"
      text-anchor="middle"
    >
      <text x={x1} {y}>{tick.split("_")[0]}</text>
    </g>
  {/each}
</g>


