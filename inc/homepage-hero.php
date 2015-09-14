
<section class="hero-banner">

	<img src="img/bg.jpg">

      <?php include ("inc/hero-message.php"); ?>

	<section class="hero-search-container">
		
		<form class="search hero-search-form">

            <span class="form-span">	
            	<input type="text" id="locationSearch" name="locationSearch" placeholder="Where do you want to go?">
            </span>

            <select class="hero-categories">
            	<option value="" disabled selected style="display:none;">What do you want to do?</option>
            	<option value="all">Everything</option>
            	<option value="top">Top Rated</option>
            	<option value="trending">Trending</option>
            	<option value="sights">Sights</option>
            	<option value="arts">Arts</option>
            	<option value="outdoors">Outdoors</option>
            	<option value="food">Food</option>
            	<option value="drinks">Drinks</option>
            	<option value="coffee">Coffee</option>
            	<option value="shops">Shops</option>
            </select>

            <!-- <span class="icon ion-ios-search"></span> -->
            <button class="icon ion-ios-search btn-primary" type="submit"></button>
                  
            </input>

		</form>	
	</section>

</section>