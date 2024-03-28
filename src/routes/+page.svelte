<script>
  import * as d3 from "d3";
  ////////////////* Importing data *////////////////
  import median_avg from "../data/median_avg.csv";
  import compare_bars from "../data/compare_bars.csv";
  import data from "../data/data.csv";
  ////////////////* Chart Components *////////////////
  import TopChart from "$lib/topSection/topChartContainer.svelte";
  import BotChart from "$lib/botSection/botSectionContainer.svelte";

  ////////////////* Utility*////////////////
  import { getTopNByOpponent } from "$lib/utility";

  let selectedMetric = "1B_num_mean";
  let selectedPlayer = "Andrew Benintendi";
  //* top sectio data

  $: top10ByOpponent = getTopNByOpponent(median_avg, selectedMetric, 10).slice(
    0,
    5
  );
  $: top10XMax = d3.extent(median_avg, (d) => d[selectedMetric])[1];

  //* bot left data
  const tempMetrics = ["P_num", "PA_num"];
  $: botLeftData = compare_bars
    .filter((d) => d.playerFullName === selectedPlayer)
    .map((d) => ({ ...d, value: parseFloat(d.value) }))
    .filter(
      (item) =>
        tempMetrics.some((value) => item.original_col.includes(value)) &&
        +item.value > 0
    );

  //* bot right data
  $: botRightData = data.filter((d) => d.playerFullName === selectedPlayer);
</script>

<main class="bg-[#EFEFEF] min-h-screen">
  <header class="bg-[#FDFDFD] text-3xl font-thin uppercase p-4 relative tracking-wider" >
    <h1>
      MLB Batter <strong class="underline">Performance</strong> Analysis <span class="font-bold"
        >- Atheletes Summary
      </span>
    </h1>
    <div class="absolute top-4 right-4 h-[5%] w-[5%]">
      <a href="https://www.trumedianetworks.com/"
        ><img
          src="//images.squarespace-cdn.com/content/v1/52818760e4b05f093cd13938/1573752919689-FAFSMZEK2WJD5QQT7PJI/TruMedia.png?format=1500w"
          alt="TruMedia"
        /></a
      >
    </div>
  </header>

  <!--! Top section dot chart -->
  <section class="bg-[#FFFFFF] my-2 mx-4 rounded-md">
    <TopChart data={top10ByOpponent} xKey={selectedMetric} {top10XMax}
    ></TopChart>
  </section>

  <!--! Bottom section -->
  <section class=" h-[800px] flex">
    <BotChart data={botLeftData} {botRightData} metricKey={selectedMetric}
    ></BotChart>
  </section>
</main>
