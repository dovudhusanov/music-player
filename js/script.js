const songText = document.getElementById("song-text");

let songs = [
    "Odamlar nima deydi",
    "Let me down slowly",
    "Doim",
    "Bilmaydi",
    "Eshiklar",
    "Comfort",
    "She'riyat",
    "Qizdir",
    "Sintetika",
    "Ertasi Yo'q",
    "Biz yo'q joyda",
    "Odamlar ucha olar"
];

let songsText = [
    "Odamlar nima desa desin, yashaylik <br /> \
        Chin dildan kulib, samimiy gaplashaylik <br /> \
        Odamlar nima desa desin, tashaylik <br /> \
        Qo'rqishni, o'ylashni, yashashni boshlaylik <br /> <br />\
        Odamlar nima deydi? <br />\
        O'zingni bosvol, hammaga o'xsha <br /> \
        Yig'ishtir! Qanaqa muzika? Qanaqa san'at? <br /> \
        Muhimroq hammadan o'qishing <br /> <br />\
        Odamlar nima deydi? <br /> \
        Katta bo'pqoldingku! Qachonga to'y endi? <br /> \
        Qanaqa ish? Karyerangni qo'y endi <br /> \
        Shu yoshdayam endi qanaqa o'yin bu, ey? <br /> <br />\
        Yig'ishtir tepishni koptok! <br /> \
        Qanaqa futbalist? Ishingni top давай! <br /> \
        Qanaqa boks? Qanaqa kurash? <br /> \
        Shunchasi chempion bo'pqoptimi? <br /> <br />\
        Odamlar nima deydi? <br /> \
        Bu yil ham bolasi o'qishdan qoptimi? <br /> \
        Senga shuncha umrimni yo'qotib <br /> \
        Natijasiga men shuni topdimmi? <br /> <br />\
        Odamlar nima deydi? <br /> \
        Indama, gapirma, ko'tarma boshni <br /> \
        Qattan bo'sayam topish kere to'yga <br /> \
        Nima deydi qo'ni-qo'shni? Zo'r qil oshni! <br /> <br />\
        Odamlar nima deydi? \
        Tengdoshmi? Kelin qimiman sinfdoshni! <br /> \
        Odamlar nima deydi? <br /> \
        Qilma ko'z yoshlar, qizim joyingda qolgin toshday <br /> <br />\
        Indama, gapirma urushsa, ichishsa, o'tib ketadi <br />\
        Hali sevadi, vaqt o'tadi <br /> \
        Farzand bo'gandan keyin o'zgaradi <br /> \
        Qaytib kema qizim, gap so'zla keremas <br />\
        Nima deysan endi? Hayot shundayda <br /> \
        Joninga qasd? <br /> \
        Nima qiganing bu? <br /> \
        Odamlar nima deydi? <br /> <br />\
        Odamlar nima desa desin, yashaylik <br /> \
        Chin dildan kulib, samimiy gaplashaylik <br /> \
        Odamlar nima desa desin, tashaylik <br /> \
        Qo'rqishni, o'ylashni, yashashni boshlaylik <br /> <br />\
        Odamlar nima desa desin, yashaylik <br /> \
        Chin dildan kulib, samimiy gaplashaylik <br /> \
        Odamlar nima desa desin, tashaylik <br /> \
        Qo'rqishni, o'ylashni, yashashni boshlaylik <br /> <br />\
        Ha! <br /> \
        Odamlar nima degan edi? <br /> \
        Yaqinla xuddi begonadey <br /> \
        Ishing bu o'yin, jiddiy emassan <br /> \
        Qo'llab-quvvatlagan kam edi <br /> <br />\
        Odamlar nima degan edi? <br /> \
        Axir, ular biladigan edi <br /> \
        Sen o'zin yo'lingni izlab qiynalasn <br /> \
        Battar qiladi yanada, a <br /> <br />\
        Lekin menga farqi yo'q <br /> \
        Biz tomonda ham chiqar quyosh <br /> \
        Ko'rsatmasdan ko'zlarda yosh <br /> \
        Yiqilsan tepadiganlar tayyor <br /> <br />\
        Har kuni top mativatsiya tur <br /> \
        Yomg'ir ostida taksi tut <br /> \
        Metro, institut, stipendiya kut <br /> \
        Hammasi bo'ladi good! <br /> <br />\
        Yurakda bo'lsa orzu <br /> \
        Barcha gap-so'zlar ortda qolar <br /> \
        Unga yetganda bir zum <br /> \
        O'zgaradi mavzu, erishganda <br /> <br />\
        O'shanda odamlar nima degan edi? <br /> \
        Endi muhimmas u <br /> \
        Endi muhimmas u <br /> <br />\
        Odamlar nima deydi? <br /> \
        Hayotingni ulardan uzoqda qur <br /> \
        Odamlar nima deydi? <br /> \
        Ko'p o'ylasang, demak bo'ladi haq u! <br /> <br />\
        Odamlar nima deydi? <br /> \
        Deb o'ylasang yashamaganing ma'qul <br /> \
        Odamlar hardoim nimadir deydi! <br /> \
        Sen bu gaplarga bo'lma qul! <br /> <br /> \
        Odamlar nima desa desin, yashaylik <br /> \
        Chin dildan kulib, samimiy gaplashaylik <br /> \
        Odamlar nima desa desin, tashaylik <br /> \
        Qo'rqishni, o'ylashni, yashashni boshlaylik <br /> <br />\
        Odamlar nima desa desin, yashaylik <br /> \
        Chin dildan kulib, samimiy gaplashaylik <br />\
        Odamlar nima desa desin, tashaylik <br />\
        Qo'rqishni, o'ylashni, yashashni boshlaylik<br /> \
        ",
    "This night is cold in the kingdom <br />\
        I can feel you fade away <br />\
        From the kitchen to the bathroom sink and <br />\
        Your steps keep me awake <br /> <br />\
        Don't cut me down, throw me out, leave me here to waste <br />\
        I once was a man with dignity and grace <br />\
        Now I'm slippin' through the cracks of your cold embrace <br /> \
        So please, please <br /> <br />\
        Could you find a way to let me down slowly? <br /> \
        A little sympathy, I hope you can show me <br /> \
        If you wanna go then I'll be so lonely <br /> \
        If you're leavin', baby, let me down slowly <br /> \
        Let me down, down, let me down, down, let me down <br /> \
        Let me down, down, let me down, down, let me down <br /> \
        If you wanna go then I'll be so lonely <br /> \
        If you're leavin', baby, let me down slowly <br /> <br />\
        Cold skin, drag my feet on the tile <br /> \
        As I'm walking down the corridor <br /> \
        And I know we haven't talked in a while <br /> \
        So I'm looking for an open door <br /> <br />\
        Don't cut me down, throw me out, leave me here to waste <br /> \
        I once was a man with dignity and grace <br /> \
        Now I'm slippin' through the cracks of your cold embrace <br /> \
        So please, please <br /> <br />\
        Could you find a way to let me down slowly? <br /> \
        A little sympathy, I hope you can show me <br /> \
        If you wanna go then I'll be so lonely <br /> \
        If you're leavin', baby, let me down slowly <br /> \
        Let me down, down, let me down, down, let me down <br /> \
        Let me down, down, let me down, down, let me down <br /> \
        If you wanna go then I'll be so lonely <br /> \
        If you're leavin', baby, let me down slowly <br /><br /> \
        And I can't stop myself from fallin' (down) down <br /> \
        And I can't stop myself from fallin' (down) down <br /> \
        And I can't stop myself from fallin' (down) down <br /> \
        And I can't stop myself from fallin' (down) down <br /> <br />\
        Could you find a way to let me down slowly? <br /> \
        A little sympathy, I hope you can show me <br /> \
        If you wanna go then I'll be so lonely <br /> \
        If you're leavin', baby, let me down slowly <br /> \
        Let me down, down, let me down, down, let me down <br /> \
        Let me down, down, let me down, down, let me down <br /> \
        If you wanna go then I'll be so lonely <br /> \
        If you're leavin', baby, let me down slowly <br /> <br />\
        If you wanna go then I'll be so lonely <br /> \
        If you're leavin', baby, let me down slowly"
    ,
    "Massa, Massa <br />\
        Hammasini Bilmohchimisan? Uh, Uh, Esht <br /> <br /> \
        1-Kuplet <br /> <br />\
        Ko'chada Yoshlidan Bola Bilmasen Kotta Bo'ganman <br />\
        Pulsiz Hayot Ko'z Oldida, Shirin Tushla Ko'rmaganman <br />\
        Buyuklik Qonimda Buni Juda Vohli Anglaganman <br />\
        Hamma Darsdan Qochgan Paytda, Man O'qishni Tanlaganman <br /><br />\
        Orzu Huddi Erte, Lekin Ertegimga Ishonganman <br />\
        Yeqilganda Yutqazmadin Dib O’zimi Aldaganman <br /> \
        O’zbe Tilini Ko’tarish Uchun Hayotimi Ataganman <br /> \
        Unitilmasin Dib Reja Tanamda Siyoh Qoldirganman <br /><br />\
        Kiyimsiz O’tmishda Sovqatdim <br />\
        To’la Dokon Kiyim Bilan Hozir Holatim <br />\
        Sovuq Bo’lardi Doim Manda Ovqatim <br />\
        Shuning Uchun Issulini Hayotda Yoqotdim <br /><br />\
        Bola Bilgin Kemagandir Omadim <br />\
        Ter Bilan Topilgandir Hamma Rohatim <br />\
        Soqqa Vaxti Keldi Jiringlidi So’gatim <br />\
        Faqat G’alaba Qozonish Mani Odatim <br /><br />\
        Naqorat (2x) <br /><br />\
        Doim Hamma Narsalarim Yengi <br /> \
        Bola Bilasan Bo’lomisan Manga Tengi <br />\
        Qatta Bo’masam Bo’lasan Mandan Keyingi <br />\
        Chunki Shetga Keganim Bo’madi Manga Yengil <br /><br />\
        2-Kuplet <br /><br />\
        Kecha, Kunduz Yo’dir Bohona <br />\
        San Kaypda Bo’guncha O’taman Keyingi Pog’ona <br />\
        O’ynamiman Gapla Mani Kutmidi Hich Choyxona <br />\
        O’ynimi Oti Kimla Ko’pro Ochadi Korxona<br /><br /> \
        Qanchali Yosh Bo’masam Halol Sotishga O’rganganman <br />\
        Qo’lga Kir Soqqa Tushganda Man Bu Yo’lli Tashaganman <br />\
        Bo’masa Diplom Ishin Bo’midi Dib Gapla Eshitganman <br /> \
        Shuning Uchun Hamma Diplomlilani Ishga Tez Oganman <br /><br />\
        Mana Sanga Dunyo Qarashim <br /> \
        Soqqa Bo’sa O’ynash, San’at Mani Muhabbatim <br />\
        Sezdin Keldin Mani Navbatim <br /> \
        O’tirib Ko’rgin Boshlanadi Manda Tamoshalarim <br /><br />\
        Imkonsiz Narsalaga Man Boshqachadir Qaraganman <br />\
        Ertalab Rejami Takrorlagan Holda Uyg’onganman <br />\
        Sanga Yoqsa Hayotin Man Intilishgani To’ymaganman <br />\
        Chunki Bu Dunyoga Yashab Ketgani Man Kemaganman <br /><br /> \
        Naqorat (2x) <br /><br />\
        Doim Hamma Narsalarim Yengi <br />\
        Bola Bilasan Bo’lomisan Manga Tengi <br />\
        Qatta Bo’masam Bo’lasan Mandan Keyingi <br />\
        Chunki Shetga Keganim Bo’madi Manga Yengil <br />\
        Chiqish <br /><br />\
        Kettu, Kettu, Kettu, Kettu <br />\
        Kettu, Kettu, Kettu, Kettu <br /><br />\
        Naqorat (2x Gafur) <br /><br />\
        Doim Hamma Narsalarim Yengi <br />\
        Bola Bilasan Bo’lomisan Manga Tengi <br />\
        Qatta Bo’masam Bo’lasan Mandan Keyingi <br />\
        Chunki Shetga Keganim Bo’madi Manga Yengil <br /><br />\
        Massa, Massa, Yeah, Toshkent, Yeah, Gafur, Yeah, Kettu, Uh, Uh…"
    ,
    "Qanday yashashni bilmaydi hech kim <br /> \
        Birgina pul bilan ko'ngil to'lmaydi <br />\
        Avval o'zi orzulardan kechgan <br />\
        Menga ham orzu qilishga qo'ymaydi <br /><br />\
        O'z yo'lida topolmasdan yechim <br />\
        Meni yo'limda topaman deb o'ylaydi <br />\
        O'zlari qanotlaridan kechib <br />\
        Nega menga ham uchishga qo'ymaydi? <br /><br />\
        Yeah, menga yana kimdir yashashni chuntiradi <br />\
        Shu payt orzularim burchakda jim turadi <br />\
        Nega kattalar mensiz kelajagin ko'radi <br />\
        Men o'zim nimani xohlashimni kim so'radi? <br /><br />\
        Xa, buni hammasi menga yaxshiroq bo'lsin deb <br />\
        Men uchun hal qilasiz hammasini har doim <br />\
        Lekin bir marta siz so'radingizmi o'zimdan <br />\
        Balki orzularimda bordir borar joyim? <br /><br />\
        Nega meni texnikaga qiziqishim yomon <br />\
        Axir, men har doim ko'rsam o'ynab o'tirganizni? <br />\
        Nega menga kitob o'qi deysiz lekin hamon <br />\
        Shu kungacha bir bor ko'rmadim-ku o'qiganizni? <br /><br />\
        Qanday yashashni bilmaydi hech kim <br />\
        Birgina pul bilan ko'ngil to'lmaydi <br />\
        Avval o'zi orzulardan kechgan <br />\
        Menga ham orzu qilishga qo'ymaydi <br /><br />\
        O'z yo'lida topolmasdan yechim <br />\
        Meni yo'limda topaman deb o'ylaydi <br />\
        O'zlari qanotlaridan kechib <br />\
        Nega menga ham uchishga qo'ymaydi? <br /><br />\
        Ohh, sho'r peshonam yaltiridi quyoshda (quyoshda) <br />\
        Kim ham o'zini topdiykin 16 yoshda? <br />\
        Men ham nimadir topdim vaqtimni yo'qotganimda <br />\
        Bugun hayotimni mazmuni o'sha topganimda <br /><br />\
        Shuncha kasb va hunar, shuncha yo'l va ular <br />\
        Bir-biridan farq qilar, nega ular hal qilar? <br />\
        So'ramay nima yoqar senga, borib kelsang bo'ldi darsingga <br />\
        Ketadi singib, shunday nechta umidlar singan, ohh <br /><br />\
        Nega hamma narsada maqsadlarimiz borib <br />\
        Yana taqalar pulga, tayinli pensiyaga <br />\
        A ungacha, yoqmagan ishda <br />\
        Hech kimni yoqtirmasdan kun kechir-a <br /><br />\
        Tushunaman, men uchun xavotirdasiz <br />\
        To'g'ri har nimani xohluradi bizda qalb <br />\
        Unutmang ustoz o'rnida hayotimdasiz <br />\
        Nari borsa biz ham bo'lamizda sizdaqa <br /><br />\
        Qanday yashashni bilmaydi hech kim <br />\
        Birgina pul bilan ko'ngil to'lmaydi <br />\
        Avval o'zi orzulardan kechgan <br />\
        Menga ham orzu qilishga qo'ymaydi <br /><br />\
        O'z yo'lida topolmasdan yechim <br />\
        Meni yo'limda topaman deb o'ylaydi <br />\
        O'zlari qanotlaridan kechib <br />\
        Nega menga ham uchishga qo'ymaydi?",
    "Ochiq eshiklardan kirish oson <br /> \
        Lekin yengil yo'llardan yo'q ma'no <br /> \
        Kimdurning hayoti yaxshi yoki rasvo <br /> \
        O'zing tanla boymisan yoki gadoymi <br /> \
        Hayoting sani qo'lingda <br /> \
        Nega hech nima qilmisan <br /> \
        Yillar rosa tez o'tar <br /> \
        San keyin ulgurmisan <br /> \
         <br /> \
        Ming marta o'lchaganingdan <br /> \
        Bir bor qilgan yaxshi <br /> \
        Bir umr qo'rqgandan ko'ra <br /> \
        Bir bor qoqilga yaxshi <br /> \
        Xohlagan ishini qilmay <br /> \
        Dissini o'qigan yaxshi <br /> \
        Bir umr uyda <br /> \
        Hayolda to'qigan daxshat <br /> \
        Hayot juda qisqa, qo'rqish uchun <br /> \
        10 yil o'qish uchun <br /> \
        Kurashmasdan o'tish uchun <br /> \
        Sevgini unutish uchun <br /> \
        Juda qisqa kuni bilan yotish uchun <br /> \
        Uni ishda sotish uchun <br /> \
        Ba'zan butun umr kamlik qilar <br /> \
        Mazzasini totish uchun <br /> \
        Ba'zan bir soniya ko'plik qilar <br /> \
        Uni yo'qotish uchun <br /> \
        Hayot bir marta berilar <br /> \
        Inson bo'lib yashab o'tish uchun <br /> \
         <br /> \
        Ochiq eshiklardan kirish oson <br /> \
        Lekin yengil yo'llardan yo'q ma'no <br /> \
        Kimdurning hayoti yaxshi yoki rasvo <br /> \
        O'zing tanla boymisan yoki gadoymi <br /> \
        Hayoting sani qo'lingda <br /> \
        Nega hichnima qimisan <br /> \
        Yillar rosa tez o'tar <br /> \
        San keyin ulgurmisan <br /> \
         <br /> \
        Man o'yludim 18 yoshimda kotta biznesim bo'ladi <br /> \
        Pulga cho'ntaklar to'ladi <br /> \
        Kimdanam so'ragandim shuni <br /> \
        Bugun qani shular (qani?) <br /> \
        Kim buni biladi? <br /> \
        10 yilim o'tib man huddi bir marta esladim <br /> \
        Eeeyyy <br /> \
         <br /> \
        Qattanam o'ylimiz-a vaqtimiz ko'p deb <br /> \
        Imkoniyatla uchib ketti to'pdek <br /> \
        Ertaga degan mozorga g'oyalarni to'kdik <br /> \
        Yuribmiz-a yoqmasayam bo'pti deb. x2 <br /> \
         <br /> \
        Ochiq eshiklardan kirish oson <br /> \
        Lekin yengil yo'llardan yo'q ma'no <br /> \
        Kimdurning hayoti yaxshi yoki rasvo <br /> \
        O'zing tanla boymisan yoki gadoymi <br /> \
        Hayoting sani qo'lingda <br /> \
        Nega hech nima qilmisan <br /> \
        Yillar rosa tez o'tar <br /> \
        San keyin ulgurmisan"
    ,
    "Yoqadi uzuk, brilliant, ko'zi katta <br /> \
        Yoqadi comfort, kvartira, bo'lsa katta <br /> \
        Yoqmadi manga o'tirish, avtobus bekatida <br /> \
        O'zingsan tiktoker bola, chaqir muzikant deb <br /> \
         <br /> \
        Yoqadi uzuk, brilliant, ko'zi katta <br /> \
        Yoqadi comfort, kvartira, bo'lsa katta <br /> \
        Ha ishtaxa zo'ru chunki planlar manda katta <br /> \
        O'zingsan tiktoker bola chaqir muzikant deb <br /> \
         <br /> \
        Qo'lda Rolex bo'sa kimam xohlamidiyu <br /> \
        Bola tanlamidi, bolani didi yo' <br /> \
        Bizani moshinala tanlamidi yo'l <br /> \
        Sho'tga bitta chaqmoq qo'ysen bo'lar, mativatsion video  <br /> \
         <br /> \
        Bola Spark minsa, bo'lar Toni Starkta <br /> \
        Konsta so'zi o'qir, kun istab <br /> \
        Bola Stark tunu kun, komputer xonasi uy <br /> \
        Bola nax kerak o'ylab, tagida qomasin quy <br /> \
         <br /> \
        Yoqadi uzuk, brilliant, ko'zi katta <br /> \
        Yoqadi comfort, kvartira, bo'lsa katta <br /> \
        Yoqmadi manga o'tirish, avtobus bekatida <br /> \
        O'zingsan tiktoker bola, chaqir muzikant deb <br /> \
         <br /> \
        Yoqadi uzuk, brilliant, ko'zi katta <br /> \
        Yoqadi comfort, kvartira, bo'lsa katta <br /> \
        Ha ishtaxa zo'ru chunki planlar manda katta <br /> \
        O'zingsan tiktoker bola chaqir muzikant deb <br /> \
         <br /> \
        Делал деньги чтобы дома было вкусно <br /> \
        Если грустно я грустичилис кусно <br /> \
        Помне время в холод досе была пусто <br /> \
        Теперь томат на капуста <br /> \
         <br /> \
        Shu sababdan ko'rinmidi negativ <br /> \
        Tanamda yo'q nikatin, qayg'udan kuchli mativ <br /> \
        Nech bor harakat qilding, kamsayam omading <br /> \
        Aytchi qancha ishlading, malibu bo'guncha matiz <br /> \
         <br /> \
        Bugun man smayl, aylanadi pazitiv <br /> \
        Hamma bilgan o'sha, mister pozitiv <br /> \
        Nft kartinkali feysim, bugun endi burger <br /> \
        Ya, ta'tib ko'rgin <br /> \
         <br /> \
        Mangayam yoqadi uzuk, brilliant, ko'zi katta <br /> \
        Yoqadi komfort, kvartira bo'lsa katta <br /> \
        Manga yoqmadi o'tirish, avtobus bekatda <br /> \
        O'zingsan tiktoker chaqir mani muzikant deb <br /> \
        ",
    "Shoir va Mutafakkir <br />\
        Mahmud Pahlavonni Bonkalari Ishgan, Qofiyalari Qattu <br /> \
        Bosh Kiyim Sotib Soqqa Qigan <br /> \
        Hozirgi Kunda Tug'ilganda Bilasanmi Kimga O'xshirdi? <br /><br /> \
        Kettu! <br /><br /> \
        Nishonlarim Ravon <br /> \
        Ko'raman Ulani Bo'sa Ham Bo'ron <br /> \
        To'xto'vsiz Misralarim Etadi Davom <br /> \
        Massa Yengi O'zbek Qahramon, Mahmud Pahlavon <br /><br /> \
        Karvon Ketidan, Yana Tarix Qaytadan <br /> \
        Yengi Siyoh Bilan Yozaman, Massa! <br /> \
        Toza Kitob Betidan, Qofiyala Ichimda <br /> \
        Ruboiyla Bilan To'laman, Chunki <br /> \
        Dushmanlarim Ko'p, Lekin Man Hammaga Yor <br /> \
        O'tkinchi Tosh Otib O'tsa Ham Manga Bol'mas Or <br /><br /> \
        Qalam Qo'limda <br /> \
        Olov Ko'nglimda <br /> \
        Ko'cha She'riyati <br /><br /> \
        Tomirlarimdan Oqadi <br /> \
        Avloddan Avlodga <br /> \
        Og'zaki Ijod O'tadi <br /> \
        Bilgin O'zbek Sh'eriyatida <br /> \
        Qadamim Yotadi, Kettu! <br /><br /> \
        Doim Uzataman Arqon <br /> \
        Lekin Ko'tarilganda Qo'yishmagan Narvon <br /> \
        Ming Yil Yashab Nuh Uchratdi Qopqon <br /> \
        Nuh Bo'masamam Ko'rdim Minglab To'fon <br /> \
        Eshtmisan Yolg'on <br /> <br />\
        Jismoniy Baquvvat, Huddi Shundo Ham Lug'at <br /> \
        Shonu-Shuhratdan Ko'rda Ustundir Rahm-Shafqat <br /> \
        Mahmud Pahlavonde So'zlarimda Ruhiy Bor Quvvat <br /> \
        Massa Boshqaruvda Sh'eriyatga Bola Marhamat <br /><br /> \
        Ajdodlaga Hos <br /> \
        Kasbim Mani Telpakdo'z <br /> \
        Mahmud Priyor Vali de <br /> \
        Bonkala Mangadir Mos, Kettu! <br /><br /> \
        Tanlangan Yo'l Edi Yomon <br /> \
        Tarbiyalagan Adabiyot Qilib Inson <br /> \
        Qando Bobolarim Yozgan Bo'sa Doston <br /> \
        Shunaqa Yashiman Faqat O'zgargan Zamon <br /> \
        Yosh Pahlavon <br /><br /> \
        Dona-Dona Bo'g'inlarim, Hayotiydir Qatorlarim <br /> \
        Pulga To'la Hayollarim, Pochkalada Mo'ljallarim <br /> \
        Ko'rishmidi Yutuqlarim, Qidirishadi Hatolarim <br /> \
        Muvaffaqiyatdan Keyin Yo'qottim Ko'p O'rtolarim <br /><br /> \
        Dushmanlarim Ko'p, Lekin Man Hammaga Yor <br /> \
        O'tkinchi Tosh Otib O'tsa Ham Manga Bol'mas Or <br /><br /> \
        Qalam Qo'limda <br /> \
        Olov Ko'nglimda <br /> \
        Ko'cha She'riyati <br /><br /> \
        Tomirlarimdan Oqadi <br /> \
        Avloddan Avlodga <br /> \
        Og'zaki Ijod O'tadi <br /> \
        Bilgin O'zbek Sh'eriyatida <br /> \
        Qadamim Yotadi, Kettu! <br /> \
        Massa. <br /> \
        ♪ <br /> \
        Yure Bilan Sezaman..."
    ,
    "Yeah <br /> \
        Massa <br /> \
        Ey, Kettu <br /><br /> \
        Qorong'inda Yoqilar Sekin Chirola <br /> \
        Qizdirilar Motorla <br /> \
        Kutadi Moshina Soyada, Yaltirar Diskla <br /> \
        Oltin Taqilgan Qorada <br /><br /> \
        Qo'yganda Qo'lni Rulga <br /> \
        Bilasan Ertalab Kirasan Uyga <br /> \
        Bo'sh Yo'llada Baland Qilib Shu Trekni <br /> \
        Dvijeniyala Aylanadi Bizada Pulga, Yeah <br /><br /> \
        Kechalari Uyg'anamiz <br /> \
        Qidirma Kunduzi Bizani <br /> \
        Ko'rasan Ko'chada Mani-Mani <br /> \
        Chiqaman Sekin Sirpangani <br /><br /> \
        Beraman Bassdan, Tovush Ayamasdan <br /> \
        Eshtasan Bizani Uzodan, Yeah <br /> \
        Led Yonar Asta, Moshinani Pasidan <br /> \
        Huddi Yangi Yil Keldi Yana, Yeah <br /><br /> \
        Tinnu Ovoz, Tinnu Bassla Doimdir Moshinamda <br /> \
        Yuqori Sifat Uzatilar qo'shiqalarda <br /> \
        Tinnu Bolla, Tinnu Qizla, Doimdir Atrofimda <br /> \
        Tepada Yulduzla avto tuning shetta <br /><br /> \
        Bo'shatila Kechasi Yo'lli <br /> \
        Chiqqan Sirpangani Bolla <br /> \
        His Qilasan Olovni <br /> \
        Balonni Iziga Atrof To'lla <br /> <br />\
        Moshinalar Taxlangan, Hammasi Artilgan, Tomlada Yulduzlar Yonadi, Yeah <br /> \
        Ko'rmisan O'xshagan, Chiqqanda Zavoddan, Bari Tuning Qilinadi, Yeah <br /><br /> \
        (Qizdir) Qizdir Matorni <br /> \
        (Qizdir) Bergin Olovni <br /> \
        (Qizdir) Qizdir Balonni <br /> \
        (Qizdir) Hamma Tayyormi? <br /> <br />\
        (Bo'shat) Bo'shatgin Yo'lni <br /> \
        (Bo'shat) Bo'shat Atrof <br /> \
        (Bo'shat) Bo'shatgin Yo'lni <br /> \
        (Bo'shat) Kevotti Bolla <br /> <br />\
        Tinnu Ko'cha, Tinnu Asfalt Nimadir Kere Yana <br /> \
        Ko'cha Changitgamiz Yoshli Cho'gladan O'sa <br /> \
        Tinnu Havo, Tinnu Navo Tortar Sani Har Kecha <br /> \
        Osmonda Yulduzla (Wooow...) <br /> <br />\
        Mayli Obvesla Mersiki <br /> \
        Ko'rinar Moshina Derskiy <br /> \
        Kemas Nexiadir Esga <br /> \
        Qarasen Bungadir Reskiy <br /> <br />\
        Moslashtiramizdir Oson <br /> \
        Yasatishga Bordir Sezgi <br /> \
        Bunaqa Tuning Bilan Bola <br /> \
        Qizlarin Oshadi Keskin <br /> <br />\
        Ishiraman 3ga Damni <br /> \
        Sillu Trassada Suzgani <br /> \
        O'tkazmiman Ko'p Odamni <br /> \
        Yetadi 3 Qiz Aylangani <br /> <br />\
        Beraman Bassdan, Tovush Ayamasdan <br /> \
        Eshtasan Bizani Uzodan, Yeah <br /> \
        Led Yonar Asta, Moshinani Pasidan <br /> \
        Huddi Yangi Yil Keldi Yana, Yeah <br /> <br />\
        Tinnu Ovoz, Tinnu Bassla Doimdir Moshinamda <br /> \
        Yuqori Sifat Uzatilar q'oshiqlarda <br /> \
        Tinnu Bolla, Tinnu Qizla, Doimdir Atrofimda <br /> \
        Tepada Yulduzla avto-tuning shetta <br /><br /> \
        Bo'shatila Kechasi Yo'lli <br /> \
        Chiqqan Sirpangani Bolla <br /> \
        His Qilasan Olovni <br /> \
        Balonni Iziga Atrof To'lla <br /><br /> \
        Moshinalar Taxlangan, Hammasi Artilgan, Tomlada Yulduzlar Yonadi, Yeah <br /> \
        Ko'rmisan O'xshagan, Chiqqanda Zavoddan, Bari Tuning Qilinadi, Yeah <br /><br /> \
        (Qizdir) Qizdir Matorni <br /> \
        (Qizdir) Bergin Olovni <br /> \
        (Qizdir) Qizdir Balonni <br /> \
        (Qizdir) Hamma Tayyormi? <br /> <br />\
        (Bo'shat) Bo'shatgin Yo'lni <br /> \
        (Bo'shat) Bo'shat Atrof <br /> \
        (Bo'shat) Bo'shatgin Yo'lni <br /> \
        (Bo'shat) Kevotti Bolla <br /> <br />\
        IP Beats",

    "<pre class='text-line right'> \
    Yulduzlarda yo'q olov <br /> \
    Ko'zlarda sentetika <br /> \
    Boshqacha estetika <br /> \
    Tuzlar ham paketika <br /> \
    Yuzim, yuzim tabassum <br /> \
    Oddiy arifmetika <br /> \
    Lekin nega berar <br /> \
    Atrofda hammayoq sentetika <br /> \
    Yulduzlarda yo'q olov <br /> \
    Ko'zlarda sentetika <br /> \
    Boshqacha estetika <br /> \
    Tuzlar ham paketika <br /> \
    Yuzim, yuzim tabassum <br /> \
    Oddiy arifmetika <br /> \
    Lekin nega berar <br /> \
    Atrofda hammayoq sentetika <br /> \
    Zerikarli hayotingni harakati minimal <br /> \
    Bolalar yasab olgan obraz <br /> \
    Mama I'm a criminal <br /> \
    Bolalar ko'rdi easy money <br /> \
    O'tirmaydi imillab <br /> \
    Maqsadga yetilsa bo'ldi <br /> \
    Farqi yo'q qanday именно <br /> \
    Agar kayf bo'lsa qaytmaydiganlar <br /> \
    Hamma yangi kayfni ko'rib chiqar <br /> \
    O'tirmaydi tanlab <br /> \
    Sentitika varianlar to'ldi <br /> \
    Topar izlaganlar <br /> \
    Boshqa yo'lga ketib qoldi <br /> \
    Химия Физика fanlar <br /> \
    U bolalarda tuygu yo'q <br /> \
    Haftalab uyqu yo'q <br /> \
    Tugamaydi kun buyon <br /> \
    Huddi qarindosh tanishi yo'q <br /> \
    Dunyo bilan ishi yo'q <br /> \
    Hozirdan ishi yo'q <br /> \
    Hozircha tashvishi yo'q <br /> \
    Agar pulni so'rasang <br /> \
    O'tirib qolgani yo'q <br /> \
    Bola bir marta kirib chiqqani <br /> \
    Topolmaydi yo'l <br /> \
    Yulduzlarda yo'q olov <br /> \
    Ko'zlarda sentetika <br /> \
    Boshqacha estetika <br /> \
    Tuzlar ham paketika <br /> \
    Yuzim, yuzim tabassum <br /> \
    Oddiy arifmetika <br /> \
    Lekin nega berar <br /> \
    Atrofda hammayoq sentetika <br /> \
    Sentetika <br /> \
    Hammayoq sentetika </pre>"
    ,
    "Ertasi yo'q bu yo'llani <br /> \
    Ertasi yo'q bu mahallani <br /> \
    Botta ishlatmidi kallani <br /> \
    Ertasi yo'q bu bollani <br /><br /> \
    Ertasi yo'q bu yo'llani <br /> \
    Ertasi yo'q bu mahallani <br /> \
    Botta ishlatmidi kallani <br /> \
    Ertasi yo'q bu bollani <br /><br /> \
    Ertasi yo'q bu yo'llani <br /> \
    Ertasi yo'q bu mahallani <br /> \
    Botta ishlatmidi kallani <br /> \
    Ertasi yo'q bu bollani <br /><br /> \
    Pul rang bir hil, honadonlar <br /> \
    Ichidagi bir hil bolajonlar <br /> \
    Qora yoki oqni tanlar <br /> \
    Maktablarda bir hil fanlar <br /><br /> \
    Maqsadsiz bir hil odamlar <br /> \
    Qishgacha yegulik g'amlar <br /> \
    Uylarda doim tayyor shamlar <br /> \
    Jim, jim, kishanda <br /><br /> \
    Dushanbadan shanbagacha, hamma ko'chada <br /> \
    Kim ishda, yo'lda, bu botqoq ko'chalarda peshkom <br /> \
    Lekin jentra minish hayolda <br /> \
    Bo'yinda qarz, o'qimidi dars, tushunmidi bas<br /> <br /> \
    Bittayam ish kemidi qo'ldan <br /> \
    Bittayam kasbni tushunmasdan, u biznes boshlidi 0 dan <br /> \
    Bugundan reja bo'lmasa, o'zgarmidi ertaga <br /> \
    Ertaga hammasi yaxshi bo'ladi degan gap, bu kimnidir ertagi <br /><br /> \
    Ertasi yo'q bu yo'llani <br /> \
    Ertasi yo'q bu mahallani <br /> \
    Botta ishlatmidi kallani <br /><br /> \
    Ertasi yo'q bu bollani <br /> \
    Ertasi yo'q bu yo'llani <br /> \
    Ertasi yo'q bu mahallani <br /> \
    Botta ishlatmidi kallani <br /><br /> \
    Ertasi yo'q bu bollani <br /> \
    Qatga keb qoldin, o'rto (o'rto) <br /> \
    To'la ko'cha fazimoda <br /> \
    Pul ketar kazinoday (soqqa) <br /> \
    O'tolmading sinovdan <br /> <br />\
    Qatga keb qoldin, o'rto (o'rto) <br /> \
    To'la ko'cha fazimoda <br /> \
    Pul ketar kazinoday <br /> \
    O'tolmading sinovdan <br /><br /> \
    Ertasi yo'q bu bollani <br /> \
    Nimayam qilarding bog'lani <br /> \
    Kasal qiladi bular sog'lani <br /> \
    Orzu qib yashab uzolani <br /><br /> \
    Ertasi yo'q bu bollani <br /> \
    Nimayam qilarding bog'lani <br /> \
    Kasal qiladi bular sog'lani <br /> \
    Orzu qib yashab uzolani <br /> \
    ♪ <br /><br /> \
    Ertasi yo'q bu yo'llani <br /> \
    Ertasi yo'q bu mahallani <br /> \
    Botta ishlatmidi kallani <br /><br /> \
    Ertasi yo'q bu bollani <br /> \
    Ertasi yo'q bu yo'llani <br /> \
    Ertasi yo'q bu mahallani <br /> \
    Botta ishlatmidi kallani <br /> \
    Ertasi yo'q bu bollani"
    ,
    "Biz yo'q joyda yo'llar tekkis <br /> \
    Biz yo'q joyda to'lla dengiz <br /> \
    Biz yo'q joyda pollar yengi <br /> \
    Biz yo'q joyda dollar tenge <br /> <br /> \
    Biz yo'q joyda xonadon keng <br /> \
    Biz yo'q joyda har bir inson teng <br /> \
    Biz yo'q joyda hamma benuqson <br /> \
    Qizlar tabiiy 60-90 <br /><br /> \
    Biz yo'q joyda yo'q rastamojka <br /> \
    Biz yo'q joyda oylik rostan oshgan <br /> \
    Biz yo'q joyda Instagram qotmas <br /> \
    Biz yo'q joyda VPN as qotmas <br /><br /> \
    Biz yo'q joylada o'chmidi svet gaz <br /> \
    Biz yo'q joylaga samalyot yetkaz <br /> \
    Biz yo'q joylaga keladi ketkim <br /><br /> \
    Afsus biz oyog'imiz hamma joyga yetkan <br /> \
    Ayt menga do'stim <br /> \
    Qayerda u joy? <br /> \
    Qayerda biz rostgo'y <br /> \
    Ishlatmimiz yolg'on? <br /> \
    (Qayerda o'sha joy?) <br /><br /> \
    Qayerda biz bir kun bo'lsa ham <br /> \
    Atrofimizda hamma narsani qimimiz vayron? <br /> \
    Yana nega hammasi bunaqa yomon <br /> \
    Deb qolamiz hayron, tushunib bo'midi <br /> \
    Poraxo'rlani yomon ko'rib beramiz pora <br /> \
    Pora bermaganni qog'oz deb qilib ovora <br /> \
    Qo'ldan kelganicha hamma narsani o'marib bo'ldik <br /> \
    Qimor haromligi esdan chiqib, hunar bo'ldi <br /> \
    O'qimasdan turib, o'qishgayam kirib <br /> \
    Amallab bitirib, kresloga o'tirib <br /> \
    Ketamiz o'pirib, vijdonni o'chirib <br /> \
    Qo'l tirsakkacha kir, ko'nglida yo'q kiri <br /> \
    Dengizdan tomchisiyu, bu milliondan biri <br /> \
    Deb hamma narsa qilamiz necha yillardan beri <br /> \
    Bizdan boshqa hamma yomon, kim bizga yordam berar? <br /> \
    Bizga yordam kerak emas, bizga insofdan kerak <br /><br /> \
    Biz yo'q joyda yo'llar tekkis <br /> \
    Biz yo'q joyda to'lla dengiz <br /> \
    Biz yo'q joyda pollar yengi <br /> \
    Biz yo'q joyda dollar tenge <br /> \
    Biz yo'q joyda xonadon keng <br /> \
    Biz yo'q joyda har bir inson teng <br /> \
    Biz yo'q joyda hamma benuqson <br /> \
    Qizlar tabiiy 60-90 <br /> \
    Biz yo'q joyda yo'q rastamojka <br /> \
    Biz yo'q joyda oylik rostan oshgan <br /> \
    Biz yo'q joyda Instagram qotmas <br /> \
    Biz yo'q joyda VPN as qotmas <br /> \
    Biz yo'q joylada o'chmidi svet gaz <br /> \
    Biz yo'q joylaga samalyot yetkaz <br /> \
    Biz yo'q joylaga keladi ketkim <br /> <br />\
    Afsuski oyog'imiz hamma joyga yetkan <br /> \
    Ayt menga do'stim <br /> \
    Qayerda u joy? <br /> \
    Qayerda biz rostgo'y <br /> \
    Ishlatmimiz yolg'on? <br /> \
    Men sen desam haliyam kuladi kimdir <br /> \
    Ko'p narsaga o'rganib keldim bolaligimdan <br /> \
    Bank kollejida o'rgandim bank ishini <br /> \
    Dushman ko'rib, ortimdan yurgan kishini <br /> \
    Ahir yolg'iz musofir talaba-o'lja <br /> \
    Uni qo'lidagi telefoni-mo'ljal <br /> \
    Bu bollarni bekorchiligi <br /> \
    Teskari o'zbek mehmondorchiligi <br /> \
    Yashash uchun aldab pul bersang finalda <br /> \
    Iymon to'la tilda ishlamasam aldab <br /> \
    Bizdan boshqala yomon-ko'ngilga dalda <br /> \
    Bu ko'ngilga dori kunda uch mahalda <br /> \
    Biz brokonyerlarmiz <br /> \
    Binolar qurob, qurib ketti yerlarimiz <br /> \
    Yangilik yo'q, natija yo'q <br /> \
    Lekin mag'rurmiz, huddi she'rlarmiz <br /> <br />\
    Biz yo'q joyda yo'llar tekkis <br /> \
    Biz yo'q joyda to'lla dengiz <br /> \
    Biz yo'q joyda pollar yengi <br /> \
    Biz yo'q joyda dollar tenge <br /> \
    Biz yo'q joyda xonadon keng <br /> \
    Biz yo'q joyda har bir inson teng <br /> \
    Biz yo'q joyda hamma benuqson <br /> \
    Qizlar tabiiy 60-90 <br /> \
    Biz yo'q joyda yo'q rastamojka <br /> \
    Biz yo'q joyda oylik rostan oshgan <br /> \
    Biz yo'q joyda Instagram qotmas <br /> \
    Biz yo'q joyda VPN as qotmas <br /> \
    Biz yo'q joylada o'chmidi svet gaz <br /> \
    Biz yo'q joylaga samalyot yetkaz <br /> \
    Biz yo'q joylaga keladi ketkim <br /> \
    Afsuski oyog'imiz hamma joyga yetkan"
    ,
    "<pre class='text-line'> \
    Ona qarang, odamlar ucha olar <br /> \
    Qanotlari yo'q, qanotlari yo'q <br /> \
    Bulutlarni mahkam ushab olar <br /> \
    Ona qarang, odamlar ucha olar <br /> \
    Ona qarang, odamlar ucha olar <br /> \
    Qaniydi men ham yetsam ularga <br /> \
    Ana qarang axir mendaka o'sha bola <br /> \
    Bu yerlardan uchib ketsa bo'larkan <br /> \
    Ona qarang, odamlar ucha olar <br /> \
    Qanotlari yo'q, qanotlari yo'q <br /> \
    Bulutlarni mahkam ushab olar <br /> \
    Ona qarang, odamlar ucha olar <br /> \
    Ona qarang, odamlar ucha olar <br /> \
    Ona qarang, o'tib ketdim ulardan <br /> \
    Axir ko'pi menga o'xshagan bollar <br /> \
    Ular ham menga o'xshab uchsa bo'larkan <br /> \
    Bu so'zlar tanish o'zimga o'xshaganlarga <br /> \
    Har bitta шанс'ni mahkam ushaganlarga <br /> \
    Oylab do'stlar bilan ko'rishmaganlarga <br /> \
    Qiziqib emas, majbur ishlaganlarga <br /> \
    Kimga bayram edi chindan yangi yil <br /> \
    Akasidan keyin kiyganlar kiyim <br /> \
    Oldin ishlab oqlab yeganlar keyin <br /> \
    Orzuga ishonib chidab keganlarga ham <br /> \
    Bizga baxt uchun ko'p narsa kerak emas edi <br /> \
    Qorboboni kutardik har yili kelmasada <br /> \
    Hayot Titanik bo'lsa, biz ishchilar kemasi edik  <br /> \
    Bayramlar ko'pku, lekin ular bizniki emas edi <br /> \
    Bu ko'chada hech kim Balenciaga kiymas edi <br /> \
    Ota-onalarda ham ma'lumot oliy emas edi <br /> \
    Shu sabab ular mayli bollarim boqishsin dedi <br /> \
    Bizda bo'lmagan hayot ularda bo'lsin dedi <br /> \
    Hamma narsamizni tikdik o'qishga <br /> \
    Diplom olib, kirdik ishga <br /> \
    Lekin negadir hayot o'sha-o'sha <br /> \
    Huddi qamoq bu Shawshank <br /> \
    Ona qarang, boss'larni diplomi yo'q <br /> \
    Dada, ularni uyida ketmoni yo'q <br /> \
    Bizni aldab, qoldirishdi bir dona yo'l <br /> \
    O'ylashdi bizda uchishning imkoni yo'q <br /> \
    Ona qarang, odamlar ucha olar <br /> \
    Qanotlari yo'q, qanotlari yo'q <br /> \
    Bulutlarni mahkam ushab olar <br /> \
    Ona qarang, odamlar ucha olar <br /> \
    Ona qarang, odamlar ucha olar <br /> \
    Qaniydi men ham yetsam ularga <br /> \
    Ana qarang axir mendaka o'sha bola <br /> \
    Bu yerlardan uchib ketsa bo'larkan <br /> \
    Ona qarang, odamlar ucha olar <br /> \
    Qanotlari yo'q, qanotlari yo'q <br /> \
    Bulutlarni mahkam ushab olar <br /> \
    Ona qarang, odamlar ucha olar <br /> \
    Ona qarang, odamlar ucha olar <br /> \
    Ona qarang, o'tib ketdim ulardan <br /> \
    Axir ko'pi menga o'xshagan bollar <br /> \
    Ular ham menga o'xshab uchsa bo'larkan \
    </pre> \
    "
]

function songTextFunc(song) {
    songText.innerHTML = songsText[song]
}