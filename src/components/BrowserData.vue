/* eslint-disable no-unused-vars */
<template>
  <div id="browserData" >
    <div class="panel">
      <div class='tytul'>
        <div id="gornaLinia" style="padding-top:1%;"> 
            <div><h2> Znaleziono {{ this.$store.state.restauracje.filter(kuchniaSel).length }} Restauracji <span v-if="this.wybranaKuchnia != '' "> z kuchnią {{ this.wybranaKuchnia }}</span> <span v-if="this.$store.state.miasto != ''"> w {{ this.$store.state.miasto}} </span> </h2></div>    
        </div> 
        <div id="dolnaLinia" style="display:flex; justify-content: space-between">
          <div><label>Ilość wyświetlanych restauracji: {{ restLimMax }} </label></div>
            <div id="wyborKuchni">
              Kuchnia: <b-button @click="wybranaKuchnia=''">Wszystkie </b-button><b-button @click="wybranaKuchnia='Polska'">Polska </b-button><b-button @click="wybranaKuchnia='Amerykańska'">Amerykańska </b-button><b-button @click="wybranaKuchnia='Włoska'">Włoska </b-button><b-button @click="wybranaKuchnia='Chińska'">Chińska </b-button><b-button @click="wybranaKuchnia='Sushi'">Sushi </b-button>
            </div>
        </div>
      </div> 
      <div class="pojemnik">
        <div class="pojemnikDwa">
          <div class="restauracja" 
          v-for="item in this.$store.state.restauracje.filter(kuchniaSel).slice(restLimMin,restLimMax)" 
          :key="item.id"
          >
            <div class="flex">
              <div class="logoRestDiv">
                  <b-img :src="item.Logo" fluid class="logoRest"/>
              </div>
              <div class="informacje" style="display:flexbox">
                    <div id="wierszP" style="width:100%; height:30%;">
                      <div id="nazwaRest">{{ item.Nazwa }}</div>
                    </div> 

                    <div id="wierszD" style="width:100%; height:70%; display:flex;">
                      <div id="kolumnaP" style="width:50%; height:100%; display:block">
                        <div id="kuchenki" style="width:100%; height:fit-content; display:inline-block; margin:0; padding:0; text-align:left">
                          <span style="font-weight:700">Kuchnie:</span>
                          <span class="kuchnie" v-for="kuchniaNazwa in item.Kuchnie" :key="kuchniaNazwa" style="font-style:italic;">
                            {{ kuchniaNazwa }} 
                          </span>
                        </div>
                        <div id="restAdresMiasto" style="width:100%; height:fit-content; display:inline-block; margin:0; padding:0; text-align:left">
                          <span style="font-weight:700">Miasto:</span>
                          <span id="itemAdres" style="font-style:italic;">
                            {{item.Miasto}}
                          </span>
                        </div>
                        <div id="restAdresUlica" style="width:100%; height:fit-content; display:inline-block; margin:0; padding:0; text-align:left">
                          <span style="font-weight:700">Ulica:</span>
                          <span id="itemAdres" style="font-style:italic;">
                            {{item.Ulica}} {{item.NumerLokalu}}
                          </span>
                        </div>
                        
                      </div>
                      <div id="kolumnaD" style="width:50%; height:100%; display:flex">
                        <div id="restOcena" style="width:100%; height:100%; display:block; margin:auto;">   
                          <div style="display:block;  width:100%; height:fit-content; padding:0%;">
                            Ocena społeczności:
                            <div><star-rating :read-only="true" :inline="true" :star-size="18" :increment="0.01" :fixed-points="2"  :rating=parseFloat(item.Ocena) inactive-color="#bbbbbb" /></div>
                          </div>
                          <div style="display:block;  width:100%; height:fit-content; margin-top:2%;">
                            <b-button
                              id="szczegoly"
                              @click="restaurantLink(item)"
                              :active="$route.name == '/restauracja'"
                              >
                              Zobacz więcej
                            </b-button>
                          </div>
                        </div>
                      </div>
                    </div>     
              </div>
            </div>           
          </div>
        </div>
        <!--
        <div class="pojemnikDwa">
          <div class="informacjeRest" v-if="currentRestauracja != 'brak'">
            <div>
              <p id="nazwaRest">{{ this.$store.state.restNazwa }} </p>
              <div class="logoRestDivInfo">
                <b-img :src="this.$store.state.restLogo" fluid class="logoRest"/>
              </div> 
              <p class="numbers" v-if="this.$store.state.cords.lat != '' ">Odległość: {{ dystans }}km</p>
              <div class="flex">
                Kuchnia: &nbsp;
                <span class="kuchnie" id="kuchOpis" v-for="kuchniaNazwa in this.$store.state.restKuchnie" :key="kuchniaNazwa">
                  {{ kuchniaNazwa }}<span v-if="currentRestauracjaKuchnie.length > 1">, &nbsp;</span>
                </span>
              </div> 
              <div class="flex">
                Miasto:&nbsp;
                <div>{{this.$store.state.restMiasto}}</div>
              </div>
              <div class="flex">
                Ulica:&nbsp;
                <div>{{this.$store.state.restUlica}} {{ this.$store.state.restNumerLokalu }}</div>
              </div>
              <div class="flex">
                <b-button
                id="szczegoly"
                @click="restaurantLink"
                :active="$route.name == '/restauracja'"
                >
                Zobacz więcej</b-button>
              </div>
              <div v-show="currentRestauracja != 'brak' ">
                Ocena społeczności: &nbsp;
                <star-rating :read-only="true" :inline="true" :star-size="16" :increment="0.01" :fixed-points="2"  :rating=parseFloat(this.$store.state.avgRestOcena) inactive-color="#bbbbbb" />
              </div>
              
              <span v-show="currentRestauracja != 'brak' " v-if="$auth.isAuthenticated">Twoja ocena: &nbsp;
                <star-rating :inline="true" :star-size="16" :increment="0.5" :fixed-points="2" :rating=parseFloat(this.$store.state.restWybranaOcena[0].Ocena) @rating-selected="setRating" inactive-color="#bbbbbb" active-color="#ffa800" />
              </span>
              
              <div v-show="currentRestauracja != 'brak' " v-if="$auth.isAuthenticated" style="margin-top:2%;">
                  <b-form-textarea
                      id="textarea"
                      v-model="text"
                      placeholder="Może chcesz coś o tej restauracji napisać?"
                      rows="3"
                      max-rows="6"
                  ></b-form-textarea>
              </div>
              
              <div v-show="currentRestauracja != 'brak' ">
                  <div v-if="$auth.isAuthenticated">
                    <b-form-checkbox
                      id="checkbox-1"
                      v-model="czyAnonim"
                      name="checkbox-1"
                      value="1"
                      unchecked-value="0"
                      style="margin:5px"
                    >
                     &nbsp; Anonimowa opinia
                    </b-form-checkbox>
                  </div>
                  <label v-show="ocena==9" v-if="$auth.isAuthenticated" style="color:darkred;">Musisz wybrać ocenę żeby móc kontynuować</label>
                  <div style="display:flex; justify-content:center">
                  <b-button style="margin:2%;" :disabled="ocena==9" variant="success" v-if="$auth.isAuthenticated" @click="ocenienie">Oceń</b-button>
                    <label style="color:brown" v-else><a id="logText" @click="login" style="text-decoration:underline;">Zaloguj się</a> aby podzielić się własną opinią!</label>
                  <b-button 
                  v-if="
                  $auth.isAuthenticated
                  &&
                  this.$store.state.restWybranaOcena[0] != false
                  &&
                  this.$store.state.restWybranaOcena[0].Autor == this.$store.state.currentUserEmail

                  " 
                  style="margin:2%; "  variant="danger" @click="usunOpinie">Usuń opinie</b-button>
                  </div>
                  <b-alert 
                      style="padding:2%; margin-top:2%;"
                      :show="dismissCountDown"
                      fade
                      variant="success"
                      @dismiss-count-down="countDownChanged"
                  >
                      Wykonano pomyślnie!
                  </b-alert>
              </div>
              <div id="kom" v-show="currentRestauracja != 'brak' "
                v-if="
                this.$store.state.restWybranaOcena[0].Komentarz != 'brak' 
                &&
                this.$store.state.restWybranaOcena.length >0 != null
                "
                style="margin-bottom:5px; margin-top:5px; border-radius:10px; padding-bottom:5%;"
                >
                <div style="font-weight: 600; border-radius:10px; text-align: center; padding:1%; text-transform:uppercase">Twój komentarz</div>
                <div id="insKom" style="border-top:1px solid black;border-bottom:1px solid black">  
                    <div id="komTekst" style="padding:1%;font-weight:600;justify-content:space-around;display:flex; border-bottom:1px inset">
                        <div style="text-align: left; width:50%;"> {{ this.$store.state.restWybranaOcena[0].Autor }} <span v-if="this.$store.state.restWybranaOcena[0].Anonim == 1">(Anonimowa)</span> </div> <div style="width:25%">Data: {{ this.$store.state.restWybranaOcena[0].Data }}</div><div style="width:19%; text-align:right">Ocena: {{ this.$store.state.restWybranaOcena[0].Ocena }}</div>
                    </div>
                    <div id="tresc" style="border-radius:10px; border-color:transparent;">
                      <div>
                          <div style="text-align: left; font-style:italic; padding:2%" v-if="this.$store.state.restWybranaOcena[0].Komentarz">{{ this.$store.state.restWybranaOcena[0].Komentarz }}   </div>
                          <div style="text-align:left; color:red; padding: 2%;" v-else><i>Brak komentarza.</i></div>
                      </div>
                    </div>
                </div>
              </div>
              <div id="kom" v-show="currentRestauracja != 'brak' "
                v-if="
                this.$store.state.restWybranaOcenaSpolecznosci[0].Komentarz != 'qqqqqqqxDXSx$qq'
                &&
                this.$store.state.restWybranaOcenaSpolecznosci[0].Autor != 'brak'
                "
                style="margin-bottom:5px; margin-top:5px;"
              >
                <div style="font-weight: 600; text-align: center; padding:1%; border-bottom:1px solid black; text-transform:uppercase">Komentarze społeczności <span style="font-family:arial"> ({{this.$store.state.restWybranaOcenaSpolecznosci.length}})</span></div>
                
                <div id="insKom" v-for="(superOcena, index) in this.$store.state.restWybranaOcenaSpolecznosci.slice(komLimMin,komLimMax)"  :key="index" style="background:#ededed; padding:0%; margin:1%;">
                    <div v-if="superOcena.Komentarz != '' && superOcena.Komentarz != null ">
                        <div id="komTekst" style="padding:1%; font-weight:600; justify-content:space-around; display:flex; border-bottom:1px inset">
                            <div style="text-align: left; width:50%;" v-if="superOcena.Anonim == 0 || superOcena.Anonim == null">{{ superOcena.Autor }}</div>
                            <div style="text-align: left; width:50%;" v-else>Anonim</div> 
                            <div style="width:30%;">Data: {{superOcena.Data}}</div>
                            <div style="width:20%; text-align:right">Ocena: {{superOcena.Ocena}}</div>
                        </div>
                        <div id="tresc">
                            <div style="text-align: left; font-style:italic; padding:2%">{{ superOcena.Komentarz }}</div>
                        </div>
                    </div>
                    <div v-else>
                        <div id="komTekst" style="padding:1%;  font-weight:600; justify-content:space-around;  display:flex; border-bottom:1px inset">
                            <div style="text-align: left; width:50%;" v-if="superOcena.Anonim == 0 || superOcena.Anonim == null">{{ superOcena.Autor }}</div>
                            <div style="text-align: left; width:50%;" v-else>Anonim</div> 
                            <div style="width:30%;">Data: {{superOcena.Data}}</div>
                            <div style="width:20%; text-align:right">Ocena: {{superOcena.Ocena}}</div>
                        </div>
                        <div id="tresc">
                            <div style="text-align:left; color:red; padding: 2%;"><i>Brak komentarza.</i></div>
                        </div>
                    </div>
                </div>
                <b-button-group style="padding:1%; text-align:center">
                    <b-button id="wiecej" v-if="komLimMax < this.$store.state.restWybranaOcenaSpolecznosci.length" @click="komLimMax+=5">Wyświetl więcej</b-button>
                    <b-button id="mniej" v-if="komLimMax > 7" @click="komLimMax-=5">Wyświetl mniej</b-button>
                </b-button-group>
              </div>
              <div v-else style="font-weight:600">Brak komentarzy społeczności! Bądź pierwszy!</div>
            </div>
          </div>
        </div>
        -->
      </div> 
      <div class="pojemnik">
        <div class="stopa" style="margin:auto; width:100%;">
            <b-button-group>
              <b-button id="wiecej" v-if="restLimMax < this.$store.state.restauracje.filter(kuchniaSel).length" @click="restLimMax+=10">Wyświetl więcej</b-button>
              <b-button id="mniej" v-if="restLimMax > 11" @click="restLimMax-=10">Wyświetl mniej</b-button>
            </b-button-group>
        </div>
      </div> 
    </div>
  </div>
</template>


<script>
// eslint-disable-next-line no-unused-vars
import { db } from '../db'
import StarRating from 'vue-star-rating'
export default {
  name: "BrowserData",
  props: { },
  // eslint-disable-next-line vue/no-unused-components
  components: {StarRating},
  data() {
    return {
      currentRestauracja: 'brak',
      inputRest: '',
      currentRestauracjaNazwa: 'brak',
      currentRestauracjaMiasto: 'brak',
      currentRestauracjaOcena: 'brak',
      currentRestauracjaLogo: 'brak',
      currentRestauracjaKuchnie: 'brak',
      currentRestauracjaUlica: 'brak',
      currentRestauracjaLokal: 'brak',
      restLimMax:  10,
      restLimMin: 0,
      tak: '',
      currentRestauracjaAdres: [],
      currentIndex: -1,
      liczbaRest: 0,
      kuchnia: null,
      latOkr: Math.round(this.$store.state.cords.lat * 1000) / 1000,
      longOkr: Math.round(this.$store.state.cords.long * 1000) / 1000,
      lat: this.$store.state.cords.lat,
      long: this.$store.state.cords.long,
      dystans:[],
      wybranaKuchnia: '',
      liczbaFilteredKuchnie: 0,
      ocenaSpolecznosci: [],
      twojaOcena: 0,
      ocena: 9,
      text: null,
      dismissSecs: 3,
      dismissCountDown: 0,
      avg: '',
      komLimMax:  2,
      komLimMin: 0,
      czyAnonim: 0,
    };
  },
  methods: {
    kuchniaSel(item){
      this.liczbaRest = 0; 
      if (this.wybranaKuchnia != '') {
        return item.Kuchnie.includes(this.wybranaKuchnia);
      }
      else{
        return item.Kuchnie;
      }
    },
    setRating: function(rating){
      this.ocena= rating;
      this.$store.state.restSelectedRestOcena= rating;
    },
    ocenienie(){
        this.$store.state.czyAnonim = this.czyAnonim;
        this.$store.state.restKomentarz = this.text;
        this.$store.commit('addOcenaRest');
        this.dismissCountDown = this.dismissSecs;
    },
    usunOpinie(){
        console.log("usuwam opinie")
        this.$store.commit('remOcenaRest');
        this.dismissCountDown = this.dismissSecs
    },
    countDownChanged(dismissCountDown) {
        this.$store.dispatch('bindOcenaRest')
        this.dismissCountDown = dismissCountDown;
    },
    getDistanceFromLatLonInKm () {
      var lat1 = this.$store.state.cords.lat;
      var lat2 = this.currentRestauracja.Adres._lat;
      var lon1 = this.$store.state.cords.long;
      var lon2 = this.currentRestauracja.Adres._long;
      var R = 6371; // Radius of the earth in km
      var dLat = (3.14 / 180)*(lat2 - lat1);  // deg2rad below
      var dLon = (3.14 / 180)*(lon2 - lon1); 
      var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos((3.14 / 180)*(lat1)) * Math.cos((3.14/180)*(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c; // Distance in km
      this.dystans = Math.round(this.dystans = d * 100) /100;
    },
    restaurantLink: function (Restaurant) {
      this.changeCurrentRestaurant(Restaurant);
      this.$router.push("/restauracja");
    },
    changeCurrentRestaurant(Restaurant) {
      this.ocena=9;
      this.currentRestauracja = Restaurant;
      this.$store.state.restNazwa= Restaurant.Nazwa;
      this.$store.state.restAdres= Restaurant.Adres;
      this.$store.state.restKuchnie= Restaurant.Kuchnie;
      this.$store.state.restLogo= Restaurant.Logo;
      this.$store.state.restMiasto= Restaurant.Miasto;
      this.$store.state.restNumerLokalu= Restaurant.NumerLokalu;
      this.$store.state.restOceny= Restaurant.Oceny;
      this.$store.state.restUlica= Restaurant.Ulica;
      this.$store.state.restMenu= Restaurant.Menu;
      this.$store.state.restKomentarze= Restaurant.Komentarze;
      this.$store.state.restId = Restaurant.id;
      this.text = null;
      this.$store.dispatch('bindOcenaRest')
    },
    login () {
      this.$auth.loginWithRedirect();
    },
  },
  created (){
    this.$store.dispatch('bindRestauracja')
    if(this.$auth.user.email != null){
      this.$store.state.currentUserEmail = this.$auth.user.email;
    }
    else{
      this.$store.state.currentUserEmail = null;
    }
  },
  computed: {
    btnStates(){
      return this.buttons.map(btn => btn.state)
    },
  },
};

</script>

<style lang="scss">
#browserData {
  margin: auto;
  width:100%;
}
.pojemnik{
  display:flex;
  width:100%;
}
.pojemnikDwa{
  width:100%;
  //height:30%;
  margin-right:2%;
  margin-left:2%;
}
.flex{
  display:flex;
  margin:auto;
  //justify-content: center;
}
.restauracja{
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgb(233, 233, 233) 0%, rgba(233, 233, 233, 0.473) 54%, rgba(255, 255, 255, 0) 100%);
  padding-right: 3%;
  margin-bottom:2%;
  color:rgb(63, 63, 63);
  -webkit-box-shadow: -8px 8px 15px -8px rgba(66, 68, 90, 1);
  -moz-box-shadow: -8px 8px 15px -8px rgba(66, 68, 90, 1);
  box-shadow: -8px 8px 15px -8px rgba(66, 68, 90, 1);
  border-radius: 20vw 0 0 20vw;
  transition: linear 0.3s;
}
.restauracja:hover{
  transform: scale(1.02);
}
.restauracja .logoRestDiv{
  width:13vw;
  //height:5vh;
  //background:yellow;
  border-radius: 25vw;
  //padding:3%;
}
.restauracja .informacje{
  width:75%;
  height:auto;
  //text-align:center;
  //background:blue;
  //display:block;
  padding:2%;
  font-size: 0.8rem;
}
.restauracja .informacje div{
  //height:50%;
  //background:grey;
}
#kuchenki{
  //width:100%;
  //height:10vh;
  //background:purple;
}
.kuchnie{
  //background:greenyellow;
  //font-size: 0.6rem;
}
#kuchOpis{
  //font-size:0.7rem;
}
.restauracja .informacje div{
  //background:red;
  //font-size:0.75rem;
  text-transform: uppercase;
  //font-weight: bold;
}
.restauracja .informacje div:nth-child(2n){
  //font-size:.6vw;
  //background:yellow;
}
.restauracja .ocenaRestDiv{
  width:15%;
  text-align:left;
  height:inherit;
  display:flex;
  justify-content: center;
  align-items: center;
  font-family: arial;
}
.ocenaRestDiv div{
  text-align:right;
  color: green;
  font-size: 0.7rem;
  width:100%;
}
#naglowek div:last-of-type{
  text-align: right;
}
.panel{
  border-radius: 15px 15px 15px 15px;
  background:rgb(255, 255, 255);
  padding-bottom:5%;
  width:100%;
}
.tytul{
  border-bottom: solid rgba(0, 0, 0, 0.171) 1px;
  color: black;
  padding:2%;
  display:flexbox;
  margin:auto;
  justify-content: space-between;
  margin-bottom:1%;
  font-size: 0.8rem;
  //position:sticky;
  top:0%;
  background:rgb(255, 255, 255);
  border-radius: 15px 15px 0px 0px;
  z-index:4;
}
.tytul #gornaLinia{
  display:flex;
  text-transform: uppercase;
  font-weight: 300;
  justify-content: space-between;
}
.tytul #dolnaLinia{
  text-align: left;
}
.tytul #dolnaLinia div{
  //margin:1%;
  text-transform: uppercase;
}
.tytul h2{
  font-size: 0.8rem;
  font-weight: 300;
}
.logoRestDiv{
  //background: url("../assets/pizza.png");
  background-size:cover;
  //margin:1%;
  //border-radius: 15px 15px 15px 15px;
}
.logoRest{
  //max-height:100%;
  //max-width:100%;
  padding:0;
  width:100%;
  margin:0;
  //height:100%;
  object-fit:cover;
}
.logoRest img{
  margin:0;
}
#cords i{
 //font-size: 0.9rem;
  font-family: arial;
}
.numbers{
  font-family: arial;
}
#nazwaRest{
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
}
.stopa{
  //background:red;
  width:100%;
  margin:auto;
  //display:flex;
}
.stopa #mniej{
  color:black;
  //text-decoration: underline;
  background: transparent;
  background:rgb(243, 243, 243);
  text-transform: uppercase;
  font-weight: 300;
  font-size:0.8rem;
  border:1px solid rgba(0, 0, 0, 0.178);
}
.stopa #wiecej{
  //text-decoration: underline;
  color:black;
  
  border:1px solid rgba(0, 0, 0, 0.178);
  text-transform: uppercase;
  font-size:0.8rem;
  font-weight: 300;
  //background: transparent;
  background:rgb(243, 243, 243);
}
#wiecej{
  color:black;
  text-transform: uppercase;
  border:none;
  font-size:0.7rem;
  font-weight: 300;
  border:1px solid rgba(0, 0, 0, 0.178);
  background: transparent;
  background:rgb(243, 243, 243);
}
#mniej{
  color:black;
  text-transform: uppercase;
  border:none;
  font-size:0.7rem;
  font-weight: 300;
  border:1px solid rgba(0, 0, 0, 0.178);
  background: transparent;
  background:rgb(243, 243, 243);
}
#szczegoly{
  //text-decoration: underline;
  color:black;
    text-transform: uppercase;

  border:none;
  font-size:0.7rem;
  font-weight: 300;
  border:1px solid rgba(0, 0, 0, 0.178);
  background: transparent;
  background:rgb(243, 243, 243);
}
#wyborKuchni{
  //background:red;
  width:60%;
  text-align: right;
  padding-top:0;
  padding-bottom:0;
  margin:0;
  font-size: 0.9rem;
}
#wyborKuchni button{
  background:transparent;
  border:0;
  margin:0;
  line-height: 100%;
  color: black;
  font-weight: 300;
  font-size:0.8rem;
  padding-top:0;
  padding-bottom:0;
}
#wyborKuchni button:focus{
  border:0;
  background:transparent;
  color:Red;
}
#wyborKuchni .active{
  color:green;
}
#wyborKuchni span{
  margin-left:1%;
}
#logoCenter{
    filter: drop-shadow(0 0 5px rgba(51, 51, 51, 0.568));
    width:3rem;
}
#wyszukiwarkaNazwa{
  width:25%;
}
#wyszukiwarkaNazwa svg{
}
/*
@media screen and (max-width: 600px) {
  .pojemnik{
    display:block;
    width:100%;
    margin:auto;
  }
  .pojemnik .pojemnikDwa{
    margin:auto;
    width:90%;
    
  }
  .pojemnik .pojemnikDwa:nth-child(2n){
    display:none;
  }
  .tytul{
    display:block;
    font-size:0.5rem;
    }
  .tytul h2{
    font-size:0.45rem;
  }
  .restauracja{
    background:rgb(238, 238, 238);
    color:rgb(63, 63, 63);
  }
  .stopa{
    //background:red;
    width:100%;
    display:block;
  }
  .stopa #lewo{
    //background:cyan;
    width:100%;
  }
  .stopa #prawo{
    //background:yellow;
    width:100%;
  }
  .restauracja .informacje div{
    font-size:0.8rem;
    margin:3%;;
    word-break: break-all;
  }
  .restauracja .informacje .kuchnie{
    font-size:0.5rem;
  }
}
@media screen and (min-width: 1200px) {
  
}
*/
</style>