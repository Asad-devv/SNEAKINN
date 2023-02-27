// import {
//   Box,
//   Typography,
//   Grid,
//   Button,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import React from "react";
// import Clips from "./utils/Clips";
// import SocialLink from "./utils/SocialLink";
// import Image from "mui-image";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { styles } from "/src/components/navbarStyle.jsx";
// const theme = createTheme();

// theme.typography.h1 = {
//   fontSize: "30px",
//   "@media (min-width:600px)": {
//     fontSize: "30px",
//   },
//   [theme.breakpoints.up("md")]: {
//     fontSize: "40px",
//   },
// };

// const Hero = ({
//   heroapi: { title, subtitle, btntext, img, sociallinks, videos },
// }) => {
//   const uTheme = useTheme(); // console.log(heroapi)
//   const isMobile = useMediaQuery(uTheme.breakpoints.down("md"));
//   console.log(isMobile);
//   return (
//     <>
//       <ThemeProvider theme={styles}>
//         <Box
//           sx={{
//             height: "110vh",
//             backgroundImage: "url('src/acomponents/wave.png')",
//           }}
//         >
//           <Grid container spacing={2} my={1}>
//             <Grid
//               sx={{ paddingLeft: "50px", backgroundColor: "" }}
//               display="flex"
//               flexDirection="column"
//               justifyContent="center"
//               height="80vh"
//               item
//               md={5}
//               xs={12}
//               sm={12}
//               p={5}
//             >
//               <div style={{ paddingLeft: "30px" }}>
//                 <Typography fontWeight="900" variant="h2">
//                   BEST SNEAKERS
//                 </Typography>
//                 <Typography fontWeight="900" variant="h3">
//                   IN TOWN
//                 </Typography>
//                 <Typography
//                   overflow="hidden"
//                   py={2}
//                   width="50vh"
//                   fontSize="12px"
//                   variant="h6"
//                 >
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
//                   distinctio suscipit numquam quas possimus magni explicabo?
//                 </Typography>
//                 <button>Buy Sneaker</button>
//               </div>
//             </Grid>

//             <Grid py={2} sx={{backgroundColor:"url('https://w7.pngwing.com/pngs/1010/1014/png-transparent-technology-circle-technology-wind-semicircle-blue-png-material-angle-thumbnail.png')"}}  item md={5} xs={8} sm={12}>
//               <div>
//                 <Typography variant="h4" textAlign="center">
//                   Air Jordan 1
//                 </Typography>
//                 <Image
//                   src="src/components/hero.png"
//                   shift="left"
//                   sx={{
//                     filter: "drop-shadow(10px 10px 10px black) invert(1%)",
//                     easing: "ease-in-out",
//                   }}
//                   height="65vh"
//                   fit="contain"
//                 />
//               </div>
//             </Grid>
//             <Grid item md={2} xs={4} height="70vh">
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   height: "70vh",
//                   justifyContent: "space-evenly",
//                 }}
//               >
//                 <Image
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5WokVDFwNUmbygDIHkYXwly4ZFBfXYkLB5A&usqp=CAU"
//                   width="20vh"
//                   height="19vh"
//                   p={1}
//                   style={{ border: "1px solid", borderRadius: "5px" }}
//                   fit="contain"
//                 />
//                 <Image
//                   src=" https://www.pngarts.com/files/8/Air-Force-One-White-Nike-Shoes-Transparent-Background-PNG.png"
//                   height="19vh"
//                   width="20vh"
//                   p={1}
//                   style={{ border: "1px solid", borderRadius: "5px" }}
//                   fit="contain"
//                 />
//                 <Image
//                   src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F07%2Fair-jordan-3-fire-red-DN3707-160-release-date-0.jpg?w=720&cbr=1&q=90&fit=max"
//                   fit="contain"
//                   width="20vh"
//                   height="19vh"
//                   p={1}
//                   style={{ border: "1px solid", borderRadius: "5px" }}
//                 />
//               </div>
//             </Grid>
//           </Grid>
//         </Box>
//       </ThemeProvider>
//     </>
//   );
// };

// export default Hero;

import React from "react";
import Clips from "./utils/Clips";
import SocialLink from "./utils/SocialLink";
import Image from "mui-image";
const Hero = ({
  heroapi: { title, subtitle, btntext, img, sociallinks, videos },
}) => {
  // console.log(heroapi)
  return (
    <>
      <div className="relative h-auto w-auto flex flex-col">
        <div className="bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10"></div>
        <div className="relative opacity-100 z-20 grid items-center justify-items-center nike-container">
          <div className="grid items-center justify-items-center mt-28 md:mt-24">
            <h1
              style={{ fontFamily: "Unbounded", fontWeight: "900" }}
              className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200"
            >
              {title}{" "}
            </h1>
            <h1 style={{ fontFamily: "Unbounded", fontWeight: "200" }} className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">
              {subtitle}
            </h1>
            <button
              type="button"
              style={{ fontFamily: "League Spartan"}}
              className="button-theme bg-slate-200  shadow-slate-900 rounded-md my-5"
            >
              {btntext}
            </button>
            <div className="grid items-center gap-5 md:gap-3 absolute top-[40vh] lg:top-[27vh] left-[9%] xl:left-0 w-auto h-auto">
              {videos?.map((val, i) => (
                <Clips key={i} imgsrc={val.imgsrc} clip={val.clip} />
              ))}
            </div>
            <div className="grid items-center absolute top-[40vh] lg:top-[27vh] right-[10vh] md:right-[1vh] gap-5 text-slate-900">
              {sociallinks?.map((val, i) => (
                <SocialLink key={i} icon={val.icon} />
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <Traditionally, sentiment analysis has focused on text analysis using Natural Language Processing and feature-based Machine Learning techniques. The advances in disciplines such as Big Data and Deep Learning technologies have impacted and benefited the evolution of the field. This Special Issue includes four works that propose novel techniques. In the first work, titled “An Improved Study of Multilevel Semantic Network Visualization for Analyzing Sentiment Word of Movie Review Data” [14], Ha et al. propose a method for sentiment visualization in massive social media. For this purpose, they design a multi-level sentiment network visualization mechanism based on emotional words in the movie review domain. They propose three visualization methods: a heatmap visualization of the semantic words of every node, a two-dimensional scaling map of semantic word data, and a constellation visualization using asterism images for each cluster of the network. The proposed visualizations have been used as a recommender system that suggest movies with similar emotions to the previously watched ones. This novel idea of recommending contents based on similar emotional patterns can be applied to other social networks. Appl. Sci. 2019, 9, 5037; doi:10.3390/app9235037 www.mdpi.com/journal/applsci 1 Appl. Sci. 2019, 9, 5037 In the second contribution, titled “Sentiment Classification Using Convolutional Neural Networks” [15], Kim and Jeong deal with the problem of textual sentiment classification. They propose a Convolutional Neural Network (CNN) model consisting of an embedding layer, two convolutional layers, a pooling layer, and a fully-connected layer. The model is evaluated in three datasets (movie review data, customer review data and Stanford Sentiment Treebank data) and compared with traditional Machine Learning models and state of the art Deep Learning models. Their main conclusion is that the use of consecutive convolutional layers is effective for relatively long texts. In the third work, titled “Sentiment-
Aware Word Embedding for Emotion Classification” [16], Mao et al. suggest the use of a sentiment-aware word embedding for improving emotional analysis. The proposed method builds a hybrid representation that combines emotional word embeddings based on an emotional lexicon with semantic word embeddings based on Word2Vec [17]. They use the emotional lexicon DUTIR, which is a Chinese ontology resource collated and labeled by the Dalian University of Technology Information Retrieval Laboratory [18]. This resource annotates lexicon entries with a model of seven emotions (happiness, trust, anger, sadness, fear, disgust and surprise). The evaluation is done with data from Weibo, a popular Chinese social networking site. The paper evaluates two methods (direct combination and addition) for building the hybrid representation in several datasets. They conclude that the experiments prove that the use of hybrid word vectors is effective for supervised emotion classification, improving significantly the classification accuracy. Finally, in the fourth theoretical contribution, titled “A Deep Learning-Based Approach for Multi-Label Emotion Classification in Tweets” [19], Jabreel and Moreno address the problem of multi-class emotion classification based on Deep Learning techniques. The most popular approach for this problem is to transform it into multiple binary classification problems, one for each emotion class. This paper proposes a new transformation approach, so-called xy-pair-set, that transforms the original problem into just one binary classification problem. The transformation problem is solved with a Deep Learning-based system, so-called BNet. This system consists of three modules: an embedding module that uses three embedding models and an attention function, an encoding module based on Recurrent Neural Networks (RNNs), and a classification module that uses two feed-forward layers with the ReLU activation function followed by a sigmoid unit. The system is evaluated using the dataset “Affect in Tweets” of SemEval-2019 Task 1 [13], and it outperformed the state of the art systems.
              src="src/components/hero.png"
              alt="hero-img/img"
              className="w-[65vh] md:w-[24vh] h-[60vh] lg:h-[39vh] md:h-[26vh] sm:h-[21vh] xsm:h-[19vh] rotate-12 transitions-theme hover:rotate-0 cursor-pointer object-fill"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
