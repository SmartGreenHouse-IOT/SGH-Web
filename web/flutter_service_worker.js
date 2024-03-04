'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e3a78d0ced43be39cb592a4f469d36c8",
"assets/AssetManifest.bin.json": "f3e7635a4d7a1ecf42b9a3ed32efbd42",
"assets/AssetManifest.json": "331215d7b0b321fac508facddbe5b90a",
"assets/assets/001-twitter.png": "2657b94b78568336942d7971151a5ca7",
"assets/assets/005-snapchat.png": "7848c8628996acbcdb79dc649555334c",
"assets/assets/006-tumblr.png": "14200db04052b0112439168172f98b61",
"assets/assets/008-facebook.png": "8fbf8c80b7a9e9c01c0b9d69077ba1b6",
"assets/assets/5783599.json": "d7e264af8a7747efea6a0f9404e6c7d6",
"assets/assets/82_abstract_geometric_background_vector%25201.png": "cb9915505ea3d3f45cec2c664fbb95cd",
"assets/assets/agreement.svg": "e517a9b7340a701dca51ce4b6d64f5e4",
"assets/assets/angle-right-small.svg": "75a329cf3e8a791324615abdca56c7a7",
"assets/assets/applogo.svg": "f57b6b0c19778627d94892a96ab056d3",
"assets/assets/architecture-g52c21068c_1280.jpg": "31b8441615567a51a2a6aa6ab2d08507",
"assets/assets/archive.svg": "6bedaaa7c5e77708692d7af202b257dd",
"assets/assets/argentina.png": "4df415cf46e8d3d76400c7051f28ee38",
"assets/assets/arrow-down-right-circle.svg": "48fd86d7e59f0b5b5bcb946e6062ed51",
"assets/assets/arrow-down-small.svg": "15df7c6ab50d66988784b702e495be6d",
"assets/assets/arrow-down-to-line.svg": "12e47ef81dc5b9184e2a56b94de69923",
"assets/assets/arrow-right-circle.svg": "383773862aeecbf2ad4c141497ee24c9",
"assets/assets/arrow-right-small.svg": "81deb815867d96cd1e4893182d98d56c",
"assets/assets/arrow-right-to-line.svg": "3f0dc4ac67da746eb3cc6756f40f9c88",
"assets/assets/arrow-up-right-circle.svg": "258c86616efb644ab5d1b26f738775be",
"assets/assets/arrow-up-small.svg": "1ccef25e6e7f1ea4be61e0105409179f",
"assets/assets/arrow-up.svg": "bbc79a288ef7e33a22055d9c2542f547",
"assets/assets/at.svg": "9a14f770802f2f07cd2da909f12010d9",
"assets/assets/atom.svg": "bbdee49675d344fa6884ebe2acae3ff2",
"assets/assets/avatar.png": "02c5b5dc930d48e18d0d30165c875e76",
"assets/assets/avatar1.png": "e6899af1e3787e7e4294a12cf13f7ab4",
"assets/assets/avatar2.png": "7dc361d65ea90665427afc6caaa47148",
"assets/assets/avenue-gb0e5048be_1280.jpg": "184e15d00086afe0109e8825eb513203",
"assets/assets/award.svg": "fb082227461873156efd30d558eea34f",
"assets/assets/Azure_T-Shirt.svg": "63fd025b88d5dfabb8c12da3765fcf42",
"assets/assets/badge-discount.svg": "2330b0a0df49cd9290faef4b5af68560",
"assets/assets/Bars.svg": "6a102fdcb00dff7df080ea4bf8cd3081",
"assets/assets/bell-notification.svg": "dd95d0ec3dfff557143728ec88caa9ee",
"assets/assets/bigchatimage.png": "06b0e387847f7b908336ff43688aefe2",
"assets/assets/bitcoin.svg": "d8e8ab259d899409f15091de62164af4",
"assets/assets/bolt-circle.svg": "9e2916066968a36ae12685955e8c9192",
"assets/assets/bolt.svg": "2e0342edaf808c64f8293faa75a9fcc9",
"assets/assets/book-open-reader.svg": "7c39463fac0557bd6c3740b173f4366d",
"assets/assets/book-open-text.svg": "68f78f44e7513f61a83b1306c7ec943b",
"assets/assets/box-check.svg": "e53a8d30fed2b738af3ec7227db9b5b2",
"assets/assets/box-check33.svg": "78304ea9099d3d5fa5bce41fe777e06d",
"assets/assets/box-search.svg": "66723c789765e9c49f41baf7dc91b72a",
"assets/assets/box.svg": "d330b9fcaa021d9867eaf541ae2e285a",
"assets/assets/brazil-.png": "3e28f0aa63a3da331c5912e1ac3eaffe",
"assets/assets/briefcase.svg": "755964ce13d6b847bb765baba1f1171b",
"assets/assets/Brown_T-Shirt.svg": "259b1d972a5457e1e24fed40950ef502",
"assets/assets/btc-graph.svg": "a4a0384dad09e44bb2c7091b09dff420",
"assets/assets/Buzz..svg": "fe7f26b7d1e4740c6b1e9b6171f22782",
"assets/assets/cabinet-filing.svg": "c506b0b69af254172575155ce070c4d1",
"assets/assets/calendar-empty-alt.svg": "b1faed87585548a85b347f0927bcc302",
"assets/assets/calendar.svg": "5fd258f762f6aba0c3f243a2b4d2fbab",
"assets/assets/camera-square.svg": "59d027201816259b6b8e65615040ad9d",
"assets/assets/cartoon%25201.png": "c7f78826f21ef1c3e51cd03a82595943",
"assets/assets/chart-2.png": "9253b057e7fa2ca608b351f3aa95fd12",
"assets/assets/Chart-3.png": "87958beefa9ce8523937f5dcfb3e2332",
"assets/assets/chart-bar-vertical.svg": "384c5cb87b1899428996a1fdf77e71d2",
"assets/assets/Chart.svg": "66d3d8cf058455463ea750412ae61c48",
"assets/assets/chat-dots.svg": "76e9aa5198a79b8a1c69d4b8cc9ddc56",
"assets/assets/chat-exclamation.svg": "35674a8ecbdb2eada0070b41d6c0764f",
"assets/assets/chat-info.svg": "9a8786bf6e1907da68a31857c628c0a9",
"assets/assets/chats.svg": "e60581c8a9862de875d271c91dc8f2b0",
"assets/assets/check-double.svg": "b5f2800abdbff0c75cab4e0e85b887aa",
"assets/assets/check.svg": "591f200f320e0fc16c6ab949f5da59df",
"assets/assets/cheerful-shopaholic-paying-by-mobile-app.jpg": "9e72229839eca500fad3e7529b163392",
"assets/assets/chevron-down.svg": "34e35bb70fc755c5c61a7c4402168caf",
"assets/assets/circle.png": "c45dbda1ac1e47649c55fb13f1f605a1",
"assets/assets/clipboard-check.svg": "ea22157b8cc57b2fdecb52774723e848",
"assets/assets/clipboard-search.svg": "81ec87f1a5000e9ace6947a508e552ee",
"assets/assets/clock-11.svg": "921a372c5ced030538fa4c1fa65ed6bd",
"assets/assets/clock.svg": "78b4a9c4308cf600c77688316c029a83",
"assets/assets/cloud-check.svg": "893f5075b06f8a096322cd12d82b9770",
"assets/assets/cloud-upload.svg": "d2ad7b1ffbaf38e21c934f832f4471c9",
"assets/assets/Code.svg": "78e4668195a01ffd1917705a28700dcb",
"assets/assets/coins29.svg": "6e8ea69eff88f48e4487273de60df14d",
"assets/assets/comment.svg": "2bcbb6e192748d69f9b25b5f19d47dee",
"assets/assets/credit-card.svg": "bce00d15bb34352ea27342abf69cadbe",
"assets/assets/cup.svg": "bae36c7ae3ad9a295d6fc8714f4883dc",
"assets/assets/dance-shoes-png-transparent-dance-shoes-images-5-min.png": "775330b04f9b601916496d5122709774",
"assets/assets/danger.svg": "27c0da9b5c77dbd52e71c9107ad277e9",
"assets/assets/desktop.svg": "ce7a290b7e0bc72307dfe9822ddc8ea9",
"assets/assets/Diagram.svg": "9b4d1b9d78edcfceffc49d3aad69359c",
"assets/assets/Doc.png": "afaf2b3d7a363dadc692b94fcb0415cd",
"assets/assets/dollar-circle.svg": "b64f916f89174174f2c44f255513a2d2",
"assets/assets/dollar-circle33.svg": "57dd8f023462c5259f408f2678d3e03d",
"assets/assets/dots-h.svg": "913efa5f6fee28c287f7b246c8d9bd5b",
"assets/assets/download.svg": "3b9b9f706677198b78d5777637f3ac49",
"assets/assets/earning.svg": "e6b437a87f2df0bd6c0d16562b709997",
"assets/assets/envelope.svg": "fc6dc4febb162f3c831f7f4bf521bf2d",
"assets/assets/eth-graph.svg": "1f1d17916f9b3658f73760dac5b0ad96",
"assets/assets/ethereum.svg": "d97c14e1de914b45d78569d5c0e9e73b",
"assets/assets/euro.svg": "9091014d74670114e5bf8096d61a55d1",
"assets/assets/exclamation-circle.svg": "8a869de9431f1c977850c50ee3a40cf5",
"assets/assets/eye.svg": "1968582f7db7332d14fcbfafce653eba",
"assets/assets/f5d18bb853c6f62199435444ecd4cf82-min.jpg": "8d61fbb6a80801692889110b2cd1e512",
"assets/assets/facebook-176-svgrepo-com.svg": "b955c9321aaadbde1d886230171f1e9d",
"assets/assets/facebook-min.png": "3bd0ba968618cb9567b03326cb148af1",
"assets/assets/fashion-shoes-sneakers-removebg-preview-min.png": "30ade83802fd54bab31cfed17446cd34",
"assets/assets/file-list.svg": "d597cbe1e0012c843c058e7a870cc4a5",
"assets/assets/file-text-edit.svg": "ceef10f67acd41a48ba9ae3d94652f0c",
"assets/assets/file-text.svg": "694cda98de9042eb9c8c059254ec6801",
"assets/assets/file.svg": "e488c8fa334885d23a7903fadafe5dae",
"assets/assets/filter.svg": "9a599c36e43a4e18b6a3afae8d60acd5",
"assets/assets/fire.svg": "11e4d67da6ea5d5b8226175474328fe6",
"assets/assets/fire29.svg": "aaf3751f07d2899fe97bb252d1843af7",
"assets/assets/folder-star.svg": "a429b8b225cdbb47afde4996b8227eba",
"assets/assets/Folder.svg": "54d9f34de9730bb1906b7f1b04b8d2b5",
"assets/assets/fonts/Gilroy-Medium.otf": "8b70347d584923c037790b37b64846a2",
"assets/assets/Frame29.svg": "06466e7ae715c43e553b4b328ae79cf1",
"assets/assets/Frame55.svg": "20130cf4afd275e92c23b862ba0369ad",
"assets/assets/full-length-portrait-happy-excited-girl-bright-colorful-clothes-holding-shopping-bags-while-standing-showing-peace-gesture-isolated.jpg": "7cb36a1bf9aa798dc38189795cb17f88",
"assets/assets/germany.png": "85ca59c60c9179d7b3e9b6ab03b407c7",
"assets/assets/gift.svg": "ec3c9c2dabc3bf49a76fd1a37d49524c",
"assets/assets/globe.svg": "9ae706809f01404f828d81076d5c90ba",
"assets/assets/gold-ingots.png": "a6a2037eaa8b078e1d531664081bfc4f",
"assets/assets/google-min.png": "5e06aa144d501e98c8aa41f999073bdd",
"assets/assets/google-plus-165-svgrepo-com.svg": "68a516e9bf5894ed452c427209d06ddf",
"assets/assets/Google.svg": "e20ad55804e6c58215e82c9a2a6bbde7",
"assets/assets/graduation-cap.svg": "7312c669f738943a8d4cdb1165542d0b",
"assets/assets/Grey_T-Shirt.svg": "a8fb6e23fe78851a63e82d3790b0af42",
"assets/assets/grid-circle.svg": "1936435326b43b60631716ad45f4bbf1",
"assets/assets/grid-square-circle.svg": "62cdae3afd80d62104497fe513bdfd88",
"assets/assets/grid-square.svg": "36ec728c09818228dfe7aa4ff0d7bd72",
"assets/assets/grid-web-3.svg": "fa61e17d97d2f4f0b61edfd46359cd84",
"assets/assets/grid-web-5.svg": "39f7c38caf5c27af9cbd913b81c09a8c",
"assets/assets/grid-web-6.svg": "30f775333b3fbbcd1078a2401e99881c",
"assets/assets/grop%2520%252010000000835.svg": "fd4823e27096eeba32a68b70a4d3e4b0",
"assets/assets/Group%25201000000834.svg": "00f1470a18c2cc62a4bfafa8f3de52d4",
"assets/assets/Group%25201000000836.svg": "1ad2b68a8bb0eb3ffc1644976c3af5db",
"assets/assets/Group%25201000000838.svg": "35b5ae0b14722780851b73191ed7c692",
"assets/assets/Group%252047858.svg": "3736a7d7f91ef717ebf5d2f2f468a663",
"assets/assets/Group%252048081.svg": "c23c027e418062d4b45f30f036cfe0c9",
"assets/assets/Group%25208342.svg": "966107d5e88e8867360b2e71e7ca369b",
"assets/assets/growth.svg": "c7a1c75d6d34bc25c1ffc10c037a31b7",
"assets/assets/guarantee%25201.svg": "1e01617fbb34194179fe8251eff81de8",
"assets/assets/hand-holding-dollar.svg": "da24f07be310a9adb87430f7154a4534",
"assets/assets/headphones.svg": "f7bd6befebc6ab60ae4cd3fa6c769648",
"assets/assets/heart-circle.png": "dacc454c16bb117cb2e4656d10e9b603",
"assets/assets/heart.svg": "50957d9736d77364e525a2683d3030c5",
"assets/assets/heartfill.svg": "d175394d7943f5843f2d6eb069f6aeb1",
"assets/assets/high_priority-48%25201.svg": "8c8690a15e3eaabe63d05c3f78bad593",
"assets/assets/home.svg": "5482bd7abc3f5a332e03642ff7eff90f",
"assets/assets/icons8-adobe-creative-cloud.svg": "0040d27ce5fbccb6388ea3c084895406",
"assets/assets/icons8-apple-logo.svg": "d37bd18d1ce7080920195f99ed7a5a6b",
"assets/assets/icons8-dart.svg": "20d7b82998ddc6f73a4310bf58e609df",
"assets/assets/icons8-facebook%25201.svg": "e2cc5a8c859b3255388e7320ff5c2d73",
"assets/assets/icons8-facebook.svg": "c2c625be9c96060284c4b0dc56415cda",
"assets/assets/icons8-facebook29.svg": "a6a36fca4b5a389d0eefbbd3a9c53a7e",
"assets/assets/icons8-figma.svg": "3b0fb69f67df8e1c5665644cc8f7a983",
"assets/assets/icons8-flutter.svg": "5c3a6308a335872a831a9f836f0e236c",
"assets/assets/icons8-google%25201.svg": "bdf2fe6bcb0cdc24e1b625958796ed08",
"assets/assets/icons8-google.svg": "c4a6f894bc33df5f58e568c425bd50d8",
"assets/assets/icons8-instagram.svg": "fcd424fadf5847ad878b3554dc35541b",
"assets/assets/icons8-java.svg": "a5f2db70e7cbcca6be936339ca60e788",
"assets/assets/icons8-nodejs.svg": "e4ddbe1a57d161bfb593c7e2ba40d345",
"assets/assets/icons8-notification.json": "7733ca96776ce9497b55506c8f1a43b4",
"assets/assets/icons8-starbucks.svg": "d2f989fa19dd6490e92d9178311ff705",
"assets/assets/icons8-time.svg": "a6ee3523cbc5a0b13aa850b51be27497",
"assets/assets/icons8-twitter.svg": "98448cfd22e9d87e477bbe414c66bb56",
"assets/assets/icon_plant_blue.svg": "94ccc5f8eacaffbe947abaa545d674cb",
"assets/assets/icon_plant_green.svg": "6fd9cfb0f0d9ab157faf1e58e0715486",
"assets/assets/icon_sun_orange.svg": "32e9d2857fdad8ffca19ba26ca56f5b9",
"assets/assets/icon_water_blue.svg": "020be8a878f331e1d0a133000537a950",
"assets/assets/icon_wind_blue.svg": "75e4cf809d5ec5a0d8ef5b277d85cc83",
"assets/assets/icon_wind_pink.svg": "473d96e03a2f05bee98ccde286615b91",
"assets/assets/ic_minus_top.png": "9c64c8c3fcd09b5f96aba5914dbeb1b2",
"assets/assets/ic_plus_top.png": "0d6f6b092f8156248f47d058c041b413",
"assets/assets/image-1.png": "a9b036193683421f6130fb6e057c336e",
"assets/assets/image-2.png": "045246d0f86733f57106b01db13b9c63",
"assets/assets/image.svg": "0c2158dfcff8fec2fec5aea6f7a94831",
"assets/assets/image01.png": "1e472dc63645dd3b0d66e1132acafeb3",
"assets/assets/india.png": "86664733bcc1f5893697e3ca30b98e99",
"assets/assets/info-circle.svg": "2a0ea4569e4a83a99bd8c18bcc989020",
"assets/assets/instagram-167-svgrepo-com.svg": "2a4ea070e0bf1cb8963eb33e054d4599",
"assets/assets/Item10.png": "ddb24f39c9e5dda880b8b590c3e0535d",
"assets/assets/Item3.png": "849027c981387ab68f26ea91a1e8ddbf",
"assets/assets/Item4.png": "00855c7b7438d9a7ab8cb4d7be2de5c1",
"assets/assets/Item5.png": "91a9cb89345440a92d459d4421dafe5e",
"assets/assets/Item6.png": "1a5383b19d8faab5d800ba3b86ea1dbd",
"assets/assets/Item7.png": "d64b188b23259dee5e9024386c84213b",
"assets/assets/Item8.png": "7d67de95621c1a31460ffcb8599a1d68",
"assets/assets/layer-group.svg": "bce3c56c231942d3ddb0c0c58596e25a",
"assets/assets/layout-web-1.svg": "997a2fa0e6f2f05b097379953ef865d4",
"assets/assets/link-alt.svg": "e6f126e846a9f5139f9712a571a29944",
"assets/assets/list.svg": "37e2b01b4b663d3b6df58024de6d234f",
"assets/assets/locales/ar.json": "7126033a5cc8835176275b9ad2d38e99",
"assets/assets/locales/en.json": "3a139a38111a03552ef66d07105e8e89",
"assets/assets/location-pin-exclamation.svg": "d5698a07ca6232f2d884332343d11a43",
"assets/assets/location-pin-question.svg": "b529b6a82d5bf659c18d755359f10969",
"assets/assets/location-pin.svg": "ae1f8f083b65f6f12dd92071c1d646eb",
"assets/assets/lock.svg": "a45dac73bc1692e9ceacdadb562e637f",
"assets/assets/log-out.svg": "7b7c0bc3837224a041e9ab155e9ba468",
"assets/assets/Logo.png": "2eedee62f9be94ef50a5ec255bfd10f6",
"assets/assets/Logo.svg": "c35e4f6fffbb69069b6c2f7d59728520",
"assets/assets/LogoText.svg": "93873fa305862f356d1ca9a47efa20f4",
"assets/assets/map.svg": "58a95127ebe220e2b52afd85d3269e3e",
"assets/assets/maps.json": "fcd86ee93fbf3126a9dad2516e08e043",
"assets/assets/medium_priority-48%25201.svg": "c49ceddce8d5d4a6506fe9dc47462674",
"assets/assets/menu-left.svg": "efbdebe61f831cfa9102002763ebcf8b",
"assets/assets/menu.svg": "ff8ab70aafc3f9c78fc2d857d60d0dd7",
"assets/assets/minus.svg": "f76adf15849f876393964f528323103b",
"assets/assets/mood-smile.svg": "8e25a5493a37329a9d436eb44c316775",
"assets/assets/moon.svg": "d9087964c550dfa95742668c78740f46",
"assets/assets/more-horizontal-circle.svg": "75c8fac5fae2e95bf69f88565887b35f",
"assets/assets/more-square.svg": "f60e40bffd36901aeccd04f9439efa4e",
"assets/assets/more-vertical.svg": "0de6ccdd32dda9f30989ff04e998a590",
"assets/assets/more.png": "3d09a6c4016c9234d7e4f5cd27245838",
"assets/assets/new-smartwatch-balancing-with-hand-min.jpg": "ec7c39e0076c43b4113b09a4fb912afc",
"assets/assets/note.svg": "7bbf247851c3ffb356f5b83d8b762dc5",
"assets/assets/notification.riv": "a347740424e15bb9441b2231acb671e9",
"assets/assets/Object%25201.png": "81796cee2203f2ec15fb5c66d0260147",
"assets/assets/objects%25201.png": "04c375bde860162945a0b40955de4993",
"assets/assets/octagon-check.svg": "18f51ae917d904babe0899dd2522d5e8",
"assets/assets/ok-11.svg": "85a8fd22bd466de823dfde4be5d7ba73",
"assets/assets/ORH91S0-min.jpg": "abb72c1a76bfd3488c1e398003f5c32b",
"assets/assets/paperclip.svg": "50f4094b24d579dccc73e7c641530153",
"assets/assets/Pdf.png": "b35355cbbabb1370e64a87b77088e705",
"assets/assets/pen-line.svg": "0649dc8f6781cb2c41380681fa904d18",
"assets/assets/pen-tool.svg": "897ce00c688e0804c760797cf2754101",
"assets/assets/pen.png": "f11fd187770f08cbfe313f2893edefcd",
"assets/assets/pen.svg": "8506f0e0fe837258865d36106aeac4f1",
"assets/assets/pexels-boys-in-bristol-photography-10528234.jpg": "35c2dfe5c45502687bfd93e7d66562c8",
"assets/assets/pexels-christyn-reyes-13458334.jpg": "6d33fcd2401fafbb49c1cb2d618879f1",
"assets/assets/pexels-davide-de-giovanni-2340978.jpg": "7fc657e7643a47d6319c3ed1cc2d72f8",
"assets/assets/pexels-garrett-morrow-623305.jpg": "e6eae0b804c28163d98e7ad88e5d0dae",
"assets/assets/pexels-kelvin-valerio-810775.jpg": "4f6ad8b4e2dc53d2f6003f434d92a48d",
"assets/assets/pexels-luca-dross-4309369.jpg": "4b90ed1320d2f766d62e7d9135efb65f",
"assets/assets/pexels-michael-block-3225517%2520(1).jpg": "7265da1dfcb64d8e3358be3e6ab24249",
"assets/assets/pexels-pixabay-219692.jpg": "57fe776a052ff24835b6e98deba16a0d",
"assets/assets/pexels-pixabay-220453.jpg": "a3cb736c28947b5cc65b678cd751a77f",
"assets/assets/phone-plus.svg": "5be1f630ed7dd94f0e2714c049dd18a4",
"assets/assets/phone.svg": "30b3153b470e38cae50b50d22ae3cc53",
"assets/assets/plus-circle.svg": "51d4d6be2c9acef838f33656a088caac",
"assets/assets/plus.svg": "a54c6b1151fae041edaa1f690afcfa91",
"assets/assets/portrait-expressive-young-woman-holding-shopping-bags.jpg": "0269f21efcec01b9a6836761a1aeb29e",
"assets/assets/portrait-payment-white-happy-consumer.jpg": "dbb5b77505ee1a912f07c572094f0ca4",
"assets/assets/ProductPage.java": "93a91f7f2c667e15b67136a12768b413",
"assets/assets/profile.png": "616addc5808d60f3fe2ea5963d95c5e2",
"assets/assets/puzzle.svg": "55de76f3ed232e6974c11b91952c3648",
"assets/assets/qrcode-example.svg": "21cf8937269cd7d776bdaaff5d7138e1",
"assets/assets/Qrcode.svg": "7295057eaab39cd5b7323163d5f5e98c",
"assets/assets/radar.svg": "3015f49ff78a787e4939b18e4d24c428",
"assets/assets/ranking29.svg": "ac599934e5eb134302652844c309d61f",
"assets/assets/receipt-list-alt.svg": "1c85d55d46b7e0837c625eb9b7b9f2a9",
"assets/assets/receipt-list29.svg": "0817cc0f290fc703af02052b166758e0",
"assets/assets/receipt.svg": "060a8b2ff06c6a3f215ed57adf514822",
"assets/assets/rocket-launch.svg": "d366c766701117a18c7012e0030e6c86",
"assets/assets/rocket.png": "5fcb51cf10aa998c99f7e7eaae2898e9",
"assets/assets/rotate-right.svg": "0f32307550ef2c5e4d32e7e35129ec21",
"assets/assets/Screen%2520Shot%25201945-02-29%2520at%25206.03.07%2520PM.png": "ac761464746b5940e6468b3a1bc27bcc",
"assets/assets/Screen%2520Shot%25201945-02-29%2520at%25206.04.00%2520PM.png": "eae549bfe2efb1d480a7bae72d95d4c3",
"assets/assets/Screen%2520Shot%25201945-03-01%2520at%252010.39.27%2520AM.png": "eee7b223596b934025bfe59c73da6848",
"assets/assets/Screen%2520Shot%25201945-03-01%2520at%252012.43.33%2520PM.png": "71cda5ba2aa83c34ac1afa91586a29d5",
"assets/assets/Screen%2520Shot%25201945-03-01%2520at%25203.35.55%2520PM.png": "573a3c9b554d8035a1b32f2f620612d8",
"assets/assets/Screen%2520Shot%25201945-03-01%2520at%25204.01.04%2520PM.png": "5056ef6016c3779db17e9598df8ce912",
"assets/assets/Screen%2520Shot%25201945-03-02%2520at%252012.27.21%2520PM.png": "05ce34d7fbf26005cd55d19ef2f71f29",
"assets/assets/Screen%2520Shot%25201945-03-02%2520at%252012.28.03%2520PM.png": "894e28a896c5b434cc010a5fc986e365",
"assets/assets/Screen%2520Shot%25201945-03-02%2520at%252012.28.18%2520PM.png": "3c8c1c4a29567bd86fc30c9b0ca4959a",
"assets/assets/Screen%2520Shot%25201945-03-02%2520at%25204.24.53%2520PM.png": "263c555099bbe783dd8b711e88b4f95f",
"assets/assets/Screen%2520Shot%25201945-03-02%2520at%25204.45.20%2520PM.png": "a705276449befbb1720991809aaa02ce",
"assets/assets/Screen%2520Shot%25201945-03-02%2520at%25204.45.43%2520PM.png": "95e137468f2b78e6892581b298a16511",
"assets/assets/Screen%2520Shot%25201945-03-02%2520at%25204.45.59%2520PM.png": "cd3ff9827a7d504f7376dbaaa49f7df3",
"assets/assets/Screen%2520Shot%25201945-03-02%2520at%25204.46.10%2520PM.png": "9463c4c187c3c726e427557bd49c237f",
"assets/assets/Screen%2520Shot%25201945-03-02%2520at%25206.11.41%2520PM.png": "b628fcdb9f032e906186ea42d184df4a",
"assets/assets/Screen%2520Shot%25201945-03-08%2520at%252012.58.52%2520PM.png": "17efdf4ef6169e15ea892489cafe90c4",
"assets/assets/search.svg": "217d61a95a94695bd18ae57c72bdaf17",
"assets/assets/seen.png": "f93c83f36e3d29fad1d750e77773ef32",
"assets/assets/send.svg": "bf8658b2030bcba73b36e34d600d6ff1",
"assets/assets/settings.svg": "62c0240952c4e18da2a219a51bbeb417",
"assets/assets/settingsfill.svg": "24b85bf7d2d508a48fcdb065167f5973",
"assets/assets/sgh_plant.svg": "1d44659475ee98346b2fc32c4b6cb4fa",
"assets/assets/sgh_plant_525px.png": "96f32c1b3d9358533f3a0f72d437a8bd",
"assets/assets/sgh_text.svg": "4f6cb66a358dbfc7e1469a822baf5518",
"assets/assets/share-two.svg": "5623c4a845f62f90fb25b96449076a31",
"assets/assets/shield-lock.svg": "6d9d82193216d53533d06982a4859381",
"assets/assets/shopping-basket.svg": "abd8c9aa99bd29c25d887246a8c7e2f7",
"assets/assets/shopping-cart.svg": "3f4dafd4da2a464d5ea205c6888de77e",
"assets/assets/sliders-horizontal-alt.svg": "e4ae35c49a593b3e735e8691b8001d9f",
"assets/assets/star.svg": "ac7012c0848a41cc81fe6f9870480cd3",
"assets/assets/sun.svg": "059eb769b058bee96de23f5f7bf69597",
"assets/assets/survey-48%25201.svg": "9113f100cc58bfc13d66735fa8202d0d",
"assets/assets/svg1.svg": "95005bf4962fdf6cec8d151ecf9724b8",
"assets/assets/times-circle.svg": "d59aa4b3fce0f08d876eb57dd7245f98",
"assets/assets/times.svg": "ebb979a17cf4060a107e145ebfff6830",
"assets/assets/tool.svg": "8febc364e37359ddbcdacb1cd9ce08f1",
"assets/assets/trash.png": "2603c0b8bd09d57a9e9666ed729bb6d4",
"assets/assets/trash.svg": "96ec4e2a256512a8025274e78a06c550",
"assets/assets/tree.svg": "eff1a7f73f7b762e1c787cd841bb9944",
"assets/assets/trophy.svg": "4e115e1286e0978da305482870d4eba4",
"assets/assets/trophy2.svg": "404eb11f9876a1862de6f2fe69e31209",
"assets/assets/trophy3.svg": "7ad2bd55d493eb51b201ab3c63c31a54",
"assets/assets/truck.svg": "41f53a82d301aec6414a4b508c9b24f7",
"assets/assets/twitter-154-svgrepo-com.svg": "1ce27b189d7718720dbbf192c8721332",
"assets/assets/united-kingdom.png": "aac0dfefc080856931658ea9c760534e",
"assets/assets/unlock123.png": "705823ed110fe0dac43488fe8f08afa9",
"assets/assets/unlocklac.png": "705823ed110fe0dac43488fe8f08afa9",
"assets/assets/user-change.svg": "a2e29c071484eb51022a53d3ada401ef",
"assets/assets/user-circle.svg": "8c5f7a7d9ad270223eda5a49ae803f50",
"assets/assets/user-minus-bottom.svg": "5cbc8df8c5592304f7c8de0ef3a244b5",
"assets/assets/user-plus.svg": "d55389f9aa8777150db95ad0bf2fae44",
"assets/assets/user.svg": "232f8924fbf16a5cdfe4b0317f335303",
"assets/assets/user123.png": "be0c8cc405da426e4e9a9c56fb1ff97a",
"assets/assets/user29.svg": "cbda6961a083f23ffd3be0d77eea12a5",
"assets/assets/users.svg": "100136370cf46879044d08813c1dc575",
"assets/assets/users33.svg": "cce284aa047fdbb834723c3e768e485f",
"assets/assets/Vector%252011.svg": "df335af759539ce7ddd866fbd2e5d25f",
"assets/assets/verify.svg": "676c9838b9b7b698bd553cd67e233a6c",
"assets/assets/video.svg": "30d574a80fe14878eb4c078a10fc53a0",
"assets/assets/video5.svg": "1cac83acb4386cc6bca7256d6e771b4d",
"assets/assets/wallet33.svg": "9ce086904397b50443cf3cacfc6a2a09",
"assets/assets/Watch%2520it%2520dark.svg": "ca473793cd50e4a15438fff9b9f70a0d",
"assets/assets/Watch%2520it%2520Illustration.svg": "361cbcfee3e39d5e9b729f3170340998",
"assets/assets/wifi.svg": "fec05c48371f715553865b5fedba27ca",
"assets/assets/wireless-inear-headphones-with-case-pink-background-flat-lay-min.jpg": "3baf18e20853292eef439b7f9637305a",
"assets/FontManifest.json": "12ca030b894ee9b111591d5abfba90a6",
"assets/fonts/MaterialIcons-Regular.otf": "9324d5d652e5a5c99f081bf653eed998",
"assets/NOTICES": "933c012a1615b36259a075f927b92ecd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/timezone/data/latest_all.tzf": "871b8008607c14f36bae2388a95fdc8c",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "b4ed007e4ee4cea1dc85d7e71f1eca82",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/android-icon-144x144.png": "5044cc744a06cd20e08af268c843024d",
"icons/android-icon-192x192.png": "5af84d5a5ea4a64a1f619a7a091274dd",
"icons/android-icon-36x36.png": "3dcdb4ee52960b31e151c26f9b8d7039",
"icons/android-icon-48x48.png": "064a3cefc7c2225deadf27cd189d2fb6",
"icons/android-icon-72x72.png": "ebd33f464a86c37b4b1f72a2544a8130",
"icons/android-icon-96x96.png": "aa0f55344c1ce8ef54ea32c89ea53024",
"index.html": "453948c2d04d66f40ea32ce4d76e6f21",
"/": "453948c2d04d66f40ea32ce4d76e6f21",
"main.dart.js": "6eee89dae7e8c9097cb35a5b88151117",
"manifest.json": "b9e6d5c26eaa16bfd6ba55c0384a1bf1",
"version.json": "b3b56012aa19fe03f0d67467c23adee0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
