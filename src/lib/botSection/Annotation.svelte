<script>
  let padding = {
    top: 190,
    bottom: 40,
    left: 25,
    right: 35,
  };
</script>

<article style="top: {padding.top-100}px;left:{padding.left}px">
  <h3 class="bg-[#E8D361]">WIN</h3>
</article>
<article style="top: {padding.top-100}px; right:{padding.right}px">
  <h3 class="bg-[#93726F]">LOSE</h3>
</article>

<style>
  article {
    position: absolute;
  }
  h3 {
    text-align: right;
    box-sizing: inherit;
    vertical-align: baseline;
    border-radius: 5px;
    /* border: 1px solid #555; */
    transition: background-color 0.2s ease-in-out;
    font-size: 48px;
    text-transform: uppercase;
    cursor: pointer;
    padding: 20px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 54px;
    margin: 0 9px;
    font-weight: 700;

    color: #fff;
    text-shadow:
      -1px -1px 0 #222,
      -1px -0.5px 0 #222,
      -1px 0 1px #222,
      -1px 0.5px 0 #222,
      -1px 1px 0 #222,
      -0.5px -1px 0 #222,
      -0.5px -0.5px 0 #222,
      -0.5px 0 1px #222,
      -0.5px 0.5px 0 #222,
      -0.5px 1px 0 #222,
      0 -1px 1px #222,
      0 -0.5px 1px #222,
      0 0.5px 1px #222,
      0 1px 1px #222,
      0.5px -1px 0 #222,
      0.5px -0.5px 0 #222,
      0.5px 0 1px #222,
      0.5px 0.5px 0 #222,
      0.5px 1px 0 #222,
      1px -1px 0 #222,
      1px -0.5px 0 #222,
      1px 0 1px #222,
      1px 0.5px 0 #222,
      1px 1px 0 #222;
  }
</style>
