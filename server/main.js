import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { TesGambarCollection } from '/imports/api/tes_gambar';
import { TesTeksCollection } from '/imports/api/tes_teks';

const SEED_EMAIL = 'example@gmail.com';
const SEED_PASSWORD = 'password';

function insertTesTeks({soal, jawaban}){
  TesTeksCollection.insert({soal, jawaban});
}

function insertTesGambar({gambar, soal, jawaban}){
  TesGambarCollection.insert({gambar, soal, jawaban});
}

if(Meteor.isServer){
  Meteor.methods({
      'updateGroups': function(form){
          Meteor.users.update({_id: Meteor.userId()},
          {
              $set: { 
                  'profile.full_name': form.full_name,
                  'emails.0.address' : form.email,
              },
          }
          )
      },
      'deleteAcc': function(){
        Meteor.users.remove({_id: Meteor.userId()});
      },
  })
}

Meteor.startup(() => {
  if (!Accounts.findUserByEmail(SEED_EMAIL)) {
    Accounts.createUser({
      email: SEED_EMAIL,
      password: SEED_PASSWORD,
    });
  }

  if(TesTeksCollection.find().count() === 0){
    insertTesTeks({
      soal: 'Ketika kamu jalan-jalan mengitari perumahan, kamu melewati jalan yang tidak pernah dilalui sebelumnya. Di samping jalan, kamu melihat sebuah rumah yang kamu impikan. Sesaat sebelum kamu mengagumi rumah itu, kamu menyadari bahwa pintu rumah itu setengah terbuka. Menurutmu kenapa pintunya terbuka?',
      jawaban: [
        {
          teks: 'Rumah itu kemalingan',
          arti: 'Kamu selalu mengira dan memprediksikan hal yang terburuk dalam situasi. Karena itulah kamu agak sulit percaya dengan orang lain, sulit membuka diri, dan cenderung mudah panik serta tidak fokus pada masalah yang terjadi.'
        },
        {
          teks: 'Pemiliknya lupa menguncinya',
          arti: 'Kamu bukan tipe orang yang mudah terbawa krisis. Kebalikannya, kamu justru merasa cuek dan merasa tidak ada krisis atau masalah sama sekali. Akibatnya, kamu sering dianggap kurang peka dan tidak selalu peduli dengan orang dan lingkungan sekitarmu.'
        },
        {
          teks: 'Pemiliknya ada di dalam rumah',
          arti: 'Kamu tipe yang santai, mudah percaya dengan orang, dan membuka diri. Tapi kamu tetap waspada dengan masalah yang akan terjadi. Hal ini menunjukkan bahwa kamu tipe orang yang matang. Kamu sadar memiliki kekurangan dan kamu biasanya memilih membuka diri hanya kepada orang yang kamu percayai.'
        }
      ]
    });
    insertTesTeks({
      soal: 'Suatu hari, seekor burung biru masuk ke kamar kamu melalui jendela dan terperangkap di dalam. Kamu tertarik dan memutuskan untuk memeliharanya. Akan tetapi, esoknya kamu terkejut karena burung itu berubah warna menjadi kuning, dan esoknya lagi berubah menjadi warna merah terang, dan hari ketiga berubah menjadi hitam. Menurutmu, burung tersebut akan berubah menjadi warna apa di hari ke-4?',
      jawaban: [
        {
          teks: 'Burung tidak berubah warna, tetap hitam',
          arti: 'Kamu cenderung pesimis dan bersifat negatif terutama disaat kamu mengalami kejadian buruk. Kamu cenderung menganggap apabila terjadi hal buruk maka situasi tidak akan membaik atau kembali normal lagi.'
        },
        {
          teks: 'Berubah kembali menjadi BIRU',
          arti: 'Kamu adalah tipe orang yang optimis. Kamu percaya bahwa kehidupan ada campuran baik dan buruk, tapi semua akan membaik. Kamu orang yang bisa menerima kenyataan dan kemalangan dengan tenang, Kamu juga cenderung menjalani hidup dengan tidak stress dan tidak khawatir akan hal buruk.'
        },
        {
          teks: 'Berubah menjadi PUTIH',
          arti: 'Kamu adalah orang yang tegas dan mampu menghadapi tekanan. Kamu tidak menghabiskan waktu dengan bersedih jika ada masalah . Jika situasi memburuk, kamu akan membuang kekalahan dan cenderung berusaha mencari solusi/cara baru atas masalah tersebut.'
        },
        {
          teks: 'Berubah menjadi EMAS',
          arti: 'Kamu adalah tipe orang yang tidak memiliki rasa takut dan tidak mengenal tekanan. Bagimu krisis atau masalah adalah kesempatan dan peluang untuk mencapai hal yang lebih baik. Namun, terkadang karena selalu positif, kamu bertindak tanpa berfikir jernih dan terkadang berlebihan/menjadi terlalu ambisius dan mengorbankan dirimu.'
        }
      ]
    });
    insertTesTeks({
      soal: 'Sebuah Mug (cangkir besar) berwarna putih polos diberikan kepada kamu bersama dengan kuas berwarna biru. Kamu diminta untuk melukiskan pola atau motif pada Mug tersebut. Kira-kira, pola atau motif apa yang akan kamu tulis?',
      jawaban: [
        {
          teks: 'Garis-garis',
          arti: 'Kamu memilih pendekatan yang langsung dan terarah dalam mengambil keputusan. Kamu termasuk pribadi yang pandai mewujudkan rencana dalam waktu yang singkat. Kamu adalah tipe pemimpin yang baik disaat-saat sulit dan penuh kritis.'
        },
        {
          teks: 'Titik-titik acak dan bersilang',
          arti: 'Kamu adalah orang yang berjiwa seni dan adaptif. Kamu selalu terlihat "keluar jalur" atau eksentrik tapi kamu sebenarnya sangat handal dalam menciptakan hal baru dan mewujudkan visi dengan caramu yang unik dan diluar pemikiran orang.'
        },
        {
          teks: 'Centang',
          arti: 'Kamu terbiasa menyelesaikan masalah sehari-hari serta mengutamakan pengalaman dalam memecahkan krisis. Kamu merupakan sosok orang yang hangat dan mampu menggandeng teman dan rekan kerja untuk menjadi lebih baik. Kamu juga suka kesederhanaan dan selalu memberi solusi mudah untuk hal-hal sulit.'
        },
        {
          teks: 'Garis-garis berombak',
          arti: 'Bakatmu adalah membangun atmosfer atau situasi dimana orang mudah mengekspresikan perasaan mereka. Orang lain cenderung nyaman denganmu dan caramu bersosialisasi. Kamu tidak butuh perhatian, namun kamu perlu merasa kamu dan orang-orang sekitarmu bahagia dan dapat bekerjasama dengan baik. Kamu adalah penggerak.'
        }
      ]
    });
    insertTesTeks({
      soal: 'Pertama, bayangkan kamu sedang memandang hamparan langit yang membuatmu bersemangat dan bahagia. Lalu, alihkan mata untuk membayangkan pemandangan lain. Manakah bayangan berikut yang membuatmu santai dan tenang?',
      jawaban: [
        {
          teks: 'Dataran penuh salju putih',
          arti: 'Kamu diberkati dengan sensitivitas yang membuatmu membaca instuisi dengan baik serta dapat menguraikan masalah rumit dengan cepat. Kamu adalah orang yang visioner dan pembuat keputusan yang baik. Kamu juga orang yang berempati dan dapat membaca perasaan seseorang dengan tepat.'
        },
        {
          teks: 'Lautan biru',
          arti: 'Kamu memiliki bakat dalam hubungan interpersonal. Orang menghormati kemampuanmu dalam berkomunikasi dan caramu membantu orang lain. Dengan kehadiranmu, kamu dapat membuat segala pekerjaan dan diskusi menjadi lebih efisien.'
        },
        {
          teks: 'Gunung yang hijau',
          arti: 'Kamu adalah pribadi yang ekspresif dan bisa membangun komunikasi positif dengan orang lain. Kamu memang suka bekerja sendiri, namun kamu tetap senang membantu orang lain. Kemampuanmu dalam hal detail dan menyalurkan ide membuat kamu disukai banyak orang.'
        },
        {
          teks: 'Taman yang penuh dengan bunga',
          arti: 'Kamu adalah orang yang kreatif dan suka hal baru. Kamu mudah bosan, namun kamu selalu menjaga hubungan baik dengan keluarga dan teman. Keahlianmu adalah mencapai tantangan baru dan selalu berusaha memberikan ide terbaik dalam memecahkan masalah.'
        }
      ]
    });
    insertTesTeks({
      soal: 'Kamu baru saja membeli majalah baru dan membawanya pulang untuk dibaca. Bagaimanakah cara kamu membaca isi majalah tersebut?',
      jawaban: [
        {
          teks: 'Membaca berurutan dari awal sampai akhir',
          arti: 'Kamu adalah tipe yang tahu setiap detail pengeluaranmu. Bukan karena khawatit dengan perencanaan keuanganmu, tapi kamu hanya merasa nyaman saja jika mengetahui secara jelas posisi segala sesuatu berada. Seperti uang, waktu, tenaga, dan pikiran yang sudah kamu keluarkan.'
        },
        {
          teks: 'Hanya membaca bagian menarik saja',
          arti: 'Kamu cenderung menggunakan uang, waktu, dan pikiranmu untuk hal yang kamu sukai saja dan cenderung menghindari masalah. Akibatnya, kamu jarang terlatih untuk mengelola sumber daya yang kamu miliki dan bisa saja mengalami kesulitan suatu hari nanti.'
        },
        {
          teks: 'Membuka secara acak dan membaca apa saja yang menarik pada bagian tersebut',
          arti: 'Kamu suka menganggap bahwa kamu pribadi yang ekonomis dan suka berhemat. Namun, orang lain akan menganggap kamu kikir atau pemilih. Kamu menganggap uang, waktu, dan tenagamu harus disimpan untuk dirimu sendiri. Hal ini membuatmu berkelimpahan namun bisa saja tidak bahagia.'
        }
      ]
    });
  }

  if(TesGambarCollection.find().count() === 0){
    insertTesGambar({
      gambar: '/img/soal/wanitasrigala.jpg',
      soal: 'Apa gambar yang kamu lihat pertama kali?',
      jawaban: [
        {
          teks: 'Serigala',
          arti: 'Misi kamu di dunia ini adalah untuk menjadi seorang pejuang. Kamu memiliki banyak pertempuran untuk dimenangkan, dunia membutuhkanmu untuk berjaga dan berhati-hati dengan sepenuh energi. Kamu mungkin merasa ada banyak kemarahan dan ketidakadilan di dunia ini, yang terasa begitu menyakitkan. Kamu melihat betapa banyak orang menderita, sementara yang lain bersenang-senang. Semua perasaan itu tidak sia-sia, kamu harus berjuang untuk dunia yang lebih baik, dan karena itulah kamu ada di dunia ini. Kerjakan sesuatu yang memotivasimu dan ketahui kekuatan batinmu.'
        },
        {
          teks: 'Bulan atau malam',
          arti: 'Kamu adalah orang yang sangat penyayang, selalu merasa perlu untuk merawat dan melindungi orang-orang yang menderita. Mungkin kamu terpanggil menjadi seorang dokter, perawat, terapis, atau mungkin memberikan nasihat bijak untuk menyembuhkan luka hati orang lain, membantu mereka menemukan "jalan" mereka kembali. Kamu ada di dunia ini untuk mendukung orang lain dan membawa mereka terus maju.'
        },
        {
          teks: 'Batang pohon kering',
          arti: 'Kamu ada di dunia ini untuk hidup dengan kebijaksanaan. Kamu adalah orang yang penuh rasa ingin tahu, suka mempelajari hal-hal baru, dan tidak takut pada masalah. Sebaliknya, kamu melihat masalah sebagai tantangan yang perlu dihadapi. Untuk itu, kamu senang memberikan solusi, menemukan jawaban atau, setidaknya, mengajukan pertanyaan kepada diri sendiri. Kamu tahu betul bahwa dunia adalah tempat yang penuh dengan misteri, tetapi kamu tidak akan pernah berhenti mencari jawaban, bahkan jika kamu tahu bahwa kamu tidak akan mencapainya.'
        },
        {
          teks: 'Siluet seorang wanita',
          arti: 'Kamu ada di dunia ini untuk menciptakan sesuatu. Kamu tidak melihat dunia dengan mata yang sama seperti yang lain. Dalam setiap hal yang kamu lakukan, dalam setiap masalah yang kamu hadapi, kamu melihat solusi yang kreatif, baru, dan cerdik. Selain itu, kamu juga menyukai keindahan, dan tahu bahwa kamu hanya dapat membangun dunia yang lebih baik berdasarkan emosi. Oleh karena itu, jalanmu adalah kreasi dan kreativitas; yang datang untuk mempercantik dunia. Menaruh di dalamnya jejak sihir, yang akan membuat semua orang bahagia dan ditakdirkan untuk bertahan.'
        },
      ]
    });
    insertTesGambar({
      gambar: '/img/soal/lelakidankambing.jpg',
      soal: 'Apa gambar yang kamu lihat pertama kali?',
      jawaban: [
        {
          teks: 'Busur panah',
          arti: 'Orang yang bertolak belakang. Kamu orang yang terlihat dingin di luar, tetapi antusias di dalam. Kamu tidak bisa banyak bicara dengan orang yang tidak kamu kenal. Namun, begitu kamu menganggap seseorang sebagai temanmu. Kamu dapat menunjukkan citra yang berbeda di depan mereka dan dapat berbagi rahasia, membicarakan hal apa pun. Inilah dirimu, orang yang bertolak belakang.'
        },
        {
          teks: 'Kepala kambing',
          arti: 'Orang yang terlalu baik. Kamu memperlakukan teman dan orang-orang di sekitarmu dengan sangat baik. Kamu lebih suka memiliki hubungan saling percaya, dan 100 persen mempercayai temanmu. Walaupun kelihatannya "bodoh", tapi ini adalah filosofimu, dan kamu yakin orang akan memperlakukanmu seperti kamu memperlakukan mereka.'
        },
        {
          teks: 'Wajah seseorang',
          arti: 'Orang yang rapuh. Citra publikmu selalu percaya diri dan menyenangkan, namun kamu benar-benar berbeda di dalam. Kamu sentimental dan sensitif, terlalu mengkhawatirkan pendapat orang tentangmu. Tidak mungkin memuaskan semua orang, namun kamu selalu ingin membiarkan semua orang menyukaimu. '
        }
      ]
    });
    insertTesGambar({
      gambar: '/img/soal/asapbangunan.jpg',
      soal: 'Apa gambar yang kamu lihat pertama kali?',
      jawaban: [
        {
          teks: 'Asap',
          arti: 'Kamu adalah orang yang menyembunyikan rahasia di kepalamu. Kamu memiliki pikiran yang luar biasa yang bisa mengantarkanmu pada kesuksesan dan kemajuan, karena kamu memahami bahwa kesempurnaan itu tidak ada. Kamu tidak percaya pada konsep pengganti dan kamu berpikir bahwa masa lalu harus diingat agar tidak membuat kesalahan di masa depan. Hal ini mungkin sepenuhnya benar.'
        },
        {
          teks: 'Pabrik',
          arti: 'Kamu memiliki cinta yang tidak ingin kamu bagi dengan orang lain, tetapi ingatlah bahwa rahasia ini akan selalu jelas. Kamu benar-benar berusaha untuk membangun kehidupan yang penuh kebenaran, karena tidak ingin memilih kebohongan daripada kebenaran. Tetapi kamu menyimpan rahasia ini hanya karena kamu berpikir jika kamu mengungkapkannya, kamu dapat menyinggung perasaan seseorang.'
        },
        {
          teks: 'Seorang dengan tangan terangkat atau matahari',
          arti: 'Kamu memiliki rahasia dan kerumitan sejak masa anak-anak. Kita semua tahu bahwa sulit bagi seseorang untuk melawan hal ini, tetapi untuk menjalani kehidupan yang tenang, kita harus menyingkirkan ketakutan itu. Analisis ketakutanmu dengan cermat dan temukan sumber yang benar-benar kamu takuti dan selesaikan masalah untuk selamanya. Kamu menciptakan masa depan untuk dirimu sendiri, jadi teruskan dan jadilah berani.'
        }
      ]
    });
  }
});
