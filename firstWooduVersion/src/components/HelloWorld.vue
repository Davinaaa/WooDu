<template>

  <div class="container-fluid">
    <div class="row clearfix">
      <div class="col-md-12 column">

        <nav class="navbar navbar-default navbar-fixed-top brandTile" role="navigation">
          <div class="navbar-header">
            <a class="navbar-brand brand font-weight-bold" href="#">wooDu</a>
          </div>
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link active" style="display: flex" href="#"><span style="margin-top: auto;line-height: 3em;">Stories </span>
            </li>
            <li class="nav-item">
              <a class="nav-link active" style="display: flex" href="#"><span style="margin-top: auto;line-height: 3em;">NFT </span> <div class="picBox boxPic1"></div></a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" style="display: flex" href="#"><span style="margin-top: auto;line-height: 3em">Twitter </span>  <div class="picBox boxPic2"></div></a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" style="display: flex" href="#"><span style="margin-top: auto;line-height: 3em">Opensea </span>  <div class="picBox boxPic3"></div></a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" style="display: flex" href="#"><span style="margin-top: auto;line-height: 3em">Instagram </span>  <div class="picBox boxPic4"></div></a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="jumbotron centerTile" style="padding-bottom:0px">
      <div  style="background-color: rgb(245, 207, 31);color: black;font-size: 3em; width: 3em;
    text-align: center;box-shadow:2px 3px 1px black;font-family: Impact;display: inline-block;position: absolute;top: 5em;left:5em">MINT</div>

      <div class="centerFontColor col-md-4" style="position: absolute;right: 4em;top:10em">
        <p>
          WooDu is a doll with a hundred variations, it is a revolutionary in the closed
          kingdom, it allows people to get rid of a single growth trajectory, no longer
          stuck to a specific identity throughout their lives.
        </p>
        <p>
          WooDu is a symbol that ordinary individuals can become all people through
          hard work, and its existence spreads the idea of freedom to the orld
        </p>
      </div>

      <div class="centerFont" style="text-align: center" style="padding-bottom:0px;line-height: 0.5 !important;">
        <span>w</span><span ><img style="position: relative;top:-0.3em;right: -0.1em" src="public/bighead.svg"/> </span><span>o</span><span>D</span><span style="color:black;text-shadow: 2px 3px 1px white;">u</span>
      </div>

    </div>


    <div class="row clearfix" style="background-color: white">
      <div class="col-md-1 column">

      </div>
      <div class="col-md-2 column picBoxB boxPicA">

      </div>
      <div class="col-md-2 column picBoxB boxPicB">

      </div>
      <div class="col-md-2 column picBoxB boxPicC">

      </div>
      <div class="col-md-2 column picBoxB boxPicD">

      </div>
      <div class="col-md-2 column picBoxB boxPicE">

      </div>
      <div class="col-md-1 column">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
    }
  }
}
</script>

<style>
  body{
    color:black;
  }
  .brandTile{
    background-color:rgb(0, 250, 120);
  }
  .centerTile{
    background-color:rgb(20, 190, 230);
  }

  .brand{
    color:black;
    font-size: 3em;
    font-family: Impact;
    padding-left: 1em;
  }


  .picBox{
    width: 3em;
    height: 3em;
    white-space:nowrap;
    display: inline-block;
  }

  .boxPic1{
    background: url("src/assets/NFTProgram.svg") no-repeat center center;
    background-size: auto 100%;
  }
  .boxPic2{
    background: url("src/assets/Twitter.svg") no-repeat center center;
    background-size: auto 100%;
  }
  .boxPic3{
    background: url("src/assets/Opensea.svg") no-repeat center center;
    background-size: auto 100%;
  }
  .boxPic4{
    background: url("src/assets/Instagram.svg") no-repeat center center;
    background-size: auto 100%;
  }

  .boxPic5{
    background: url("src/assets/MINT.svg") no-repeat center center;
    background-size: auto 100%;
  }


  .picBoxCenter{
    /*width: 30em;*/
    height: 15em;
    white-space:nowrap;
    display: inline-block;
  }


  .boxPicCenter{
    background: url("public/bighead.svg") no-repeat center center;
    background-size: auto 100%;
  }



  .picBoxB{
    /*width: 30em;*/
    height: 15em;
    white-space:nowrap;
    display: inline-block;
  }


  .boxPicA{
    background: url("src/assets/bannerA.svg") no-repeat center center;
    background-size: auto 100%;
  }
  .boxPicB{
    background: url("src/assets/bannerB.svg") no-repeat center center;
    background-size: auto 100%;
  }
  .boxPicC{
    background: url("src/assets/bannerC.svg") no-repeat center center;
    background-size: auto 100%;
  }
  .boxPicD{
    background: url("src/assets/bannerD.svg") no-repeat center center;
    background-size: auto 100%;
  }
  .boxPicE{
    background: url("src/assets/bannerE.svg") no-repeat center center;
    background-size: auto 100%;
  }

  .centerFontColor{
    background-color: rgb(93, 210, 238);
    width: 40em;
    float: right;
  }


  .centerFont {
    color: white;
    font-size: 30em;
    text-shadow: 2px 3px 1px black;
  }
</style>
