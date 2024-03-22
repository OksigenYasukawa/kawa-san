const site = window.location.hostname;

// alert("Success at " + site + " yeyy");

const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

function Create_Custom_Element(tag, attr_tag, attr_name, value) {
    const custom_element = document.createElement(tag);
    custom_element.setAttribute(attr_tag, attr_name);
    custom_element.innerHTML = value;
    document.body.append(custom_element);
}

if (site.includes("youtube.com")) {
    Add_Custom_Style(`
        .ytd-app {
          margin-right: 50px !important;
        }
        #js-custom-element-up {
            font-size: 60px;
            padding: 150px 0;
            color: #ff0037 !important;
            background-color: #fffffff2;
            position: fixed;
            top: 0;
            text-align: center;
            width: 100%;
            z-index: 999999;
        }

        .button-containerssss {
            position: fixed;
            right: 0;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            overflow-y: auto; /* Membuat scrollbar ketika konten melebihi ketinggian maksimum */
            z-index: 9999; /* Nilai z-index yang tinggi untuk memastikan elemen ini di atas elemen lain */
            background-color:#fffffff2;
            padding:20px;
            height:100%;
            
          }
          
          .buttonssss {
            display: block;
            margin-bottom: 5px;
            padding: 10px;
            border-radius: 5px;
            background-color: black;
            color: white;
            text-decoration: none;
            font-size: 14px;
            transition: 2s;
            width:100px;
          }

          .buttonssss {
            background-color: ffffff6c;
            color: white;

          }

          ::-webkit-scrollbar {
            display: none;
            }

          .buttonssss:first-child {
            margin-top: 5px;

          }
          
          /* Penyesuaian untuk membuat tombolssss berbaris baru */
          .button-containerssss.flex-new-line {
            flex-direction: row; /* Menjadikan elemen berbaris */
            align-items: flex-start; /* Menempatkan elemen ke kiri */
          }
          
          .button-containerssss.flex-new-line .buttonssss {
            margin: 5px 5px 5px 0; /* Memberikan margin agar tombolssss berada di sebelah kanan */
          }

          .button:hover {
            background-color: #737373;
            color: white;
          }
    `);

    Create_Custom_Element(
        "div",
        "class",
        "button-containerssss",
        "<b>Brutal Deck</b>" +
        "<a href='https://www.youtube.com/@Akari_' class='buttonssss btn-1'>Akari</a>" +
        "<a href='https://www.youtube.com/@alwisusilo' class='buttonssss btn-1'>alwisusilo</a>" +
        "<a href='https://www.youtube.com/@Amarynn_' class='buttonssss btn-1'>Amarynn</a>" +
        "<a href='https://www.youtube.com/@Aspect30' class='buttonssss btn-1'>Aspect30</a>" +
        "<a href='https://www.youtube.com/@ayoncakra' onclick='return false;' class='buttonssss btn-1'>ayoncakra</a>" +
        "<a href='https://www.youtube.com/@Azrealon' class='buttonssss btn-1'>Azrealon</a>" +
        "<a href='https://www.youtube.com/@ChumKevin' class='buttonssss btn-1'>ChumKevin</a>" +
        "<a href='https://www.youtube.com/@CorazonID' class='buttonssss btn-1'>CorazonID</a>" +
        "<a href='https://www.youtube.com/@daazan05' class='buttonssss btn-1'>daazan05</a>" +
        "<a href='https://www.youtube.com/@AkuDaiHehe' class='buttonssss btn-1'>AkuDaiHehe</a>" +
        "<a href='https://www.youtube.com/@Diansaurs' class='buttonssss btn-1'>Diansaurs</a>" +
        "<a href='https://www.youtube.com/@eiraholden' class='buttonssss btn-1'>eiraholden</a>" +
        "<a href='https://www.youtube.com/@ElestialHD' class='buttonssss btn-1'>ElestialHD</a>" +
        "<a href='https://www.youtube.com/@Fernandes_MC' class='buttonssss btn-1'>Fernandes_MC</a>" +
        "<a href='https://www.youtube.com/@FirmanGG' class='buttonssss btn-1'>FirmanGG</a>" +
        "<a href='https://www.youtube.com/@FreezeMay' class='buttonssss btn-1'>FreezeMay</a>" +
        "<a href='https://www.youtube.com/@GemmaD' class='buttonssss btn-1'>GemmaD</a>" +
        "<a href='https://www.youtube.com/@gizanG15' class='buttonssss btn-1'>gizanG15</a>" +
        "<a href='https://www.youtube.com/@KagumaX' class='buttonssss btn-1'>KagumaX</a>" +
        "<a href='https://www.youtube.com/@Kaiiraaa' class='buttonssss btn-1'>Kaiiraaa</a>" +
        "<a href='https://www.youtube.com/@its_Kiitsunee' class='buttonssss btn-1'>its_Kiitsunee</a>" +
        "<a href='https://www.youtube.com/@ledib' class='buttonssss btn-1'>ledib</a>" +
        "<a href='https://www.youtube.com/@RafiLNM' class='buttonssss btn-1'>RafiLNM</a>" +
        "<a href='https://www.youtube.com/@IndraAF11' class='buttonssss btn-1'>IndraAF11</a>" +
        "<a href='https://www.youtube.com/@MABROS' class='buttonssss btn-1'>MABROS</a>" +
        "<a href='https://www.youtube.com/@MatemJohnStones' class='buttonssss btn-1'>MatemJohnStones</a>" +
        "<a href='https://www.youtube.com/@Mefelz' class='buttonssss btn-1'>Mefelz</a>" +
        "<a href='https://www.youtube.com/@Meganekunz' class='buttonssss btn-1'>Meganekunz</a>" +
        "<a href='https://www.youtube.com/@michanangel' class='buttonssss btn-1'>michanangel</a>" +
        "<a href='https://www.youtube.com/@MoenD' class='buttonssss btn-1'>MoenD</a>" +
        "<a href='https://www.youtube.com/@NakkiKun' class='buttonssss btn-1'>NakkiKun</a>" +
        "<a href='https://www.youtube.com/@NevinGamingYT' class='buttonssss btn-1'>NevinGamingYT</a>" +
        "<a href='https://www.youtube.com/@Otodamshh' class='buttonssss btn-1'>Otodamshh</a>" +
        "<a href='https://www.youtube.com/@PakGM' class='buttonssss btn-1'>PakGM</a>" +
        "<a href='https://www.youtube.com/@PepPey' class='buttonssss btn-1'>PepPey</a>" +
        "<a href='https://www.youtube.com/@RafelAlvaRhea' class='buttonssss btn-1'>RafelAlvaRhea</a>" +
        "<a href='https://www.youtube.com/@RICQ22' class='buttonssss btn-1'>RICQ22</a>" +
        "<a href='https://www.youtube.com/@SamsulCH' class='buttonssss btn-1'>SamsulCH</a>" +
        "<a href='https://www.youtube.com/@SCORTCH' class='buttonssss btn-1'>SCORTCH</a>" +
        "<a href='https://www.youtube.com/@Servasius' class='buttonssss btn-1'>Servasius</a>" +
        "<a href='https://www.youtube.com/@ShadowClawsYT' class='buttonssss btn-1'>ShadowClawsYT</a>" +
        "<a href='https://www.youtube.com/@TapacHotama' class='buttonssss btn-1'>TapacHotama</a>" +
        "<a href='https://www.youtube.com/@TicoVlame' class='buttonssss btn-1'>TicoVlame</a>" +
        "<a href='https://www.youtube.com/@UrekanFaiz' class='buttonssss btn-1'>UrekanFaiz</a>" +
        "<a href='https://www.youtube.com/@Watchoutz' class='buttonssss btn-1'>Watchoutz</a>" +
        "<a href='https://www.youtube.com/@Wortelemes' class='buttonssss btn-1'>Wortelemes</a>" +
        "<a href='https://www.youtube.com/@yuukilutfy' class='buttonssss btn-1'>yuukilutfy</a>"
    );
}