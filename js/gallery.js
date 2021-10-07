jQuery(document).ready(function () {
  jQuery("#gallery").nanogallery2({
    items: [
      {
        src: "20211006_111732.jpg",
        srct: "/thumbs/20211006_111732.jpg",
      },
      {
        src: "20211006_111654.jpg",
        srct: "/thumbs/20211006_111654.jpg",
      },
      {
        src: "20211006_110903.jpg",
        srct: "/thumbs/20211006_110903.jpg",
      },
      {
        src: "20211005_182707.jpg",
        srct: "/thumbs/20211005_182707.jpg",
      },
      {
        src: "20211005_173831.jpg",
        srct: "/thumbs/20211005_173831.jpg",
      },
      {
        src: "20211005_163315.jpg",
        srct: "/thumbs/20211005_163315.jpg",
      },
      {
        src: "20211005_143207.jpg",
        srct: "/thumbs/20211005_143207.jpg",
      },
      {
        src: "20211005_143100.jpg",
        srct: "/thumbs/20211005_143100.jpg",
      },
    ],
    thumbnailWidth: "auto",
    thumbnailHeight: 400,
    itemsBaseURL:
      "https://raw.githubusercontent.com/mwiens91/misha-pics/master/pics",
  });
});
