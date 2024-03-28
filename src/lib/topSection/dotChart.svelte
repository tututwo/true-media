<script>
  import { getContext } from "svelte";

  const { data, xGet, yGet, xDomain, zRange, yScale, config, zGet } =
    getContext("LayerCake");

  /** @type {Number} [r=5] - The circle radius. */
  export let r = 7;

  $: midHeight = $yScale.bandwidth() / 2;
</script>

<div class="dot-plot">
  <!--  for each opponent -->
  {#each $data as opponent, i}
    {#each opponent.topN as player}
      {@const scaledYValue = $yGet(player)}
      {@const scaledXValues = $xGet(player)}

      <div
        class="circle"
        style="
						left: {scaledXValues}%;
						top: {scaledYValue + midHeight}%;
						width: {r * 2}px;
						height: {r * 2}px;
						background: {$zRange[i]};
            opacity: .55
					"
      ></div>
    {/each}
  {/each}
</div>

<style>
  .line {
    position: absolute;
    border-bottom: 1px solid #000;
  }
  .circle {
    position: absolute;
    border-radius: 50%;
    border: 2px solid #747474;
    transform: translate(-50%, -50%);
  }
</style>
