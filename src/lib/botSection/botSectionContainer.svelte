<script>
  import * as d3 from "d3";
  import { LayerCake, Svg, ScaledSvg } from "layercake";

  import Bar from "./Bar.svelte";
  import YText from "./yText.svelte";

  import Column from "./bottomRightSection/Column.svelte";
  import BANSection from "./bottomRightSection/BANSection.svelte";
  import Annotation from "./Annotation.svelte";
  export let data = [];
  export let botRightData = [];
  export let metricKey;
  const xKey = "value";
  const yKey = "original_col";

  function sortData(dataArray, win) {
    return dataArray
      .filter((d) => d.win === "TRUE")
      .sort((a, b) => d3.descending(+a[xKey], +b[xKey]));
  }

  // Sorted data for the TRUE case
  let sortedDataForTrue = sortData(data, "TRUE");
  let sortedDataForFalse = sortData(data, "FALSE");

  const parseDate = d3.timeParse("%Y-%m-%d");
  $: newMetricKey = metricKey.split("_")[0];
  $: botRightData.forEach((d) => {
    d.date = parseDate(d.date);
    d[newMetricKey] = +d[newMetricKey];
  });
</script>

<section
  id="left-section"
  class="bg-[#FFFFFF] mb-2 mx-4 rounded-md px-4 pt-2 flex relative"
>
  <h5>What are the metrics like when a player win a game</h5>
  <Annotation></Annotation>
  <figure class="flex-1">
    <LayerCake
      padding={{ top: 190, bottom: 40, left: 15, right: 35 }}
      x={xKey}
      y={yKey}
      yScale={d3.scaleBand().paddingInner(0.05)}
      xDomain={[0, null]}
      data={sortedDataForTrue}
    >
      <Svg>
        <Bar flip={true} fill="#E8D361" />
        <YText></YText>
      </Svg>
    </LayerCake>
  </figure>

  <figure class="flex-1">
    <LayerCake
      padding={{ top: 190, bottom: 40, right: 15, left: 35 }}
      x={xKey}
      y={yKey}
      yScale={d3.scaleBand().paddingInner(0.05)}
      xDomain={[0, null]}
      data={sortedDataForFalse}
    >
      <Svg>
        <Bar fill="#93726F" />
      </Svg>
    </LayerCake>
  </figure>
</section>

<section
  id="right-section"
  class="bg-[#FFFFFF] mb-2 mr-4 rounded-md px-4 pt-2 flex flex-col relative"
>
  <div class="flex-1 flex w-full">
    <!-- top section -->
    <div class="flex-1 w-full mr-4">
      <BANSection></BANSection>
    </div>
    <div class="flex-4 w-full">
      <iframe
        width="100%"
        height="200"
        frameborder="0"
        src="https://observablehq.com/embed/858a0912f9b0de73@122?cell=*"
      ></iframe>
    </div>
  </div>
  <div class="flex-2 w-full relative">
    <h5>
      How consistent is the player's performance throughout the year? Does
      home/away play a role?
    </h5>
    <figure>
      <iframe
        class="mt-8"
        width="100%"
        height="500"
        frameborder="0"
        src="https://observablehq.com/embed/0ba213149d72cab4?cell=*"
      ></iframe>

      <!-- <LayerCake
        ssr
        percentRange
        padding={{ top: 10, right: 0, bottom: 20, left: 20 }}
        x={"date"}
        y={newMetricKey}
        xScale={d3.scaleBand().paddingInner(0.028).round(true)}
        yDomain={[0, null]}
        data={botRightData}
      >
        <ScaledSvg>
          <Column />
        </ScaledSvg>
      </LayerCake> -->
    </figure>
  </div>
</section>

<style>
  #left-section {
    flex: 0 0 40%; /* 40% of the available space */
    /* Add additional styling for the left section if needed */
  }

  #right-section {
    flex: 1; /* Takes up the remaining space */
    /* Add additional styling for the right section if needed */
  }
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
    top: 20px;
    left: 20px;
  }
</style>
