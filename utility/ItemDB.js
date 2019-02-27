var Item = require('../model/Item');

var data = [
    {
        itemCode: 1,
        itemName: "Optimum Nutrition Gold Standard",
        catalogCategory: "WHEY PROTEIN",
        descriptionTitle: ["OPTIMUM TRUE STRENGTH","QUALITY","CONSISTENCY","HISTORY & HERITAGE"],
        description: ["True Strength is a journey. It never rests, it never quits. It's about overcoming \
                        obstacles, accomplishing goals, and recognizing achievements. And then it resets to \
                        achieve again. As your trusted sports nutrition partner in goal achievement, ON \
                        demonstrates that same passion while crafting our products. From the raw materials \
                        we source to our state-of-the-art manufacturing processes, no compromises are made. \
                        You set the bar higher after every workout, we set the bar higher to redefine the \
                        industry standards and ensure you realize optimum results."
                        ,"Whey protein isolates are the purest form of whey and the main ingredient in Gold \
                        Standard 100% Whey™. Each serving provides 24 grams of rapidly digesting whey protein \
                        with low levels of fat, cholesterol, lactose and other stuff you can do without making \
                        Gold Standard 100% Whey™ the standard all other proteins are measured against."
                        ,"Optimum Nutrition has been spotting the efforts of goal driven individuals since 1986. \
                        As one of the few companies to operate state-of-the-art manufacturing facilities that are \
                        GMP compliant, ON assures that every shake will mix up effortlessly because of its \
                        first-to-market instantization process. You also expect each shake to taste the same as \
                        the last and your next. That's the kind of consistency ON delivers."
                        ,"Optimum Nutrition is legendary for both quality and innovation. In addition to \
                        producing the world's best-selling whey protein, ON's Gold Standard 100% Casein™ \
                        introduced slow-digesting nighttime protein to the weight training world and \
                        Essential Amino Energy™ created the anytime energy category in sports nutrition. \
                        When technology makes advancements possible, ON will be the company bringing it \
                        first to your shaker cup."],
        nutritionFactsImage: "/images/on-whey-nutrition-facts.png",
        rating: 5,
        imageUrl: "/images/on-whey-protein.png"
    },
    {
        itemCode: 2,
        itemName: "MuscleTech™ Nitro-Tech™ 100% Whey Gold",
        catalogCategory: "WHEY PROTEIN",
        descriptionTitle: ["BEST-IN-CLASS FORMULA, TASTE AND VALUE","SUPERIOR SCIENCE. SUPERIOR RESULTS.","BEST-IN-CLASS TASTE!"],
        description: ["For over 20 years, NITRO-TECH® has been a leading protein brand. Built on a \
                        foundation of human research and cutting-edge science, it has earned the trust of \
                        countless consumers worldwide. Now the same research and development team has \
                        pioneered a new formula based on superior protein sources, quality and manufacturing. \
                        Introducing NITRO-TECH® 100% WHEY GOLD – a pure protein formula featuring whey peptides and isolate!"
                        ,"MuscleTech® researchers reviewed numerous clinical trials on whey peptides, and \
                        the science shows that whey peptides can promote rapid recovery from exercise.* \
                        This means you are getting an ultra-pure, rapidly absorbed and quickly digested \
                        protein that allows you to recover faster, build more lean muscle mass and get \
                        better results from your training sessions!* What’s more, whey peptides have one \
                        of the highest biological values (BV) of any protein source, a value given to \
                        protein sources to measure how well they are absorbed and used by the body.*"
                        ,"Enjoying a clean formula doesn’t mean you have to deal with excess carbs and \
                        fat. For some companies, the taste of their protein is the only thing they have \
                        going for them, so they load up their protein formulas with cheap proteins that \
                        are easy to flavor, and then chase that with a load of flavoring in the form of \
                        sugar, carbs and fat. At MuscleTech®, we believe you shouldn’t have to sacrifice \
                        macronutrients for results. That’s why our research team works closely with some \
                        of the top protein-flavoring professionals in the world! In fact, we conducted \
                        taste tests to help us formulate a best-in-class NITRO-TECH® 100% WHEY GOLD taste \
                        profile we know you’ll love. The result is a great-tasting formula that doesn’t \
                        pack the extra sugar and carbs you’ll see in other protein powders. This gives \
                        you more protein per scoop and a better overall macronutrient profile."],
        nutritionFactsImage: "/images/muscletech-nutrition-facts.png",
        rating: 4,
        imageUrl: "/images/muscletech.png"
    },
    {
        itemCode: 3,
        itemName: "Dymatize® Nutrition ISO 100",
        catalogCategory: "WHEY PROTEIN",
        descriptionTitle: ["WHY ISO100?, TASTE AND VALUE","Take your performance to the next level with ISO•100."],
        description: ["ISO100® is simply muscle-building fuel. Each serving contains 25 grams of protein \
                        and 5.5g of BCAAs including 2.7g of L-Leucine. Known worldwide for quality, taste \
                        and purity, ISO100 is produced to our highest quality standards. ISO100 is \
                        formulated using a cross-flow micro filtration, multi-step purification process \
                        that preserves important muscle-building protein fractions while removing excess \
                        carbohydrates, fat, lactose and cholesterol. ISO100 is made with pre-hydrolyzed \
                        protein sources to ensure fast digestion and absorption."
                        ,"You expect only to the best from yourself and your nutrition. DYMATIZE \
                        ISO•100® is one of the most advanced and effective proteins available and was \
                        developed to give you 100% of what you need to support muscle growth and achieve \
                        your ambitions. The Fastest-Acting Protein. ISO•100 provides 25 grams of super-fast \
                        absorbing 100% whey protein isolate and has been hydrolyzed for even faster \
                        absorption and digestion. It delivers quick amino acid replenishment, perfect first \
                        thing in the morning to stop catabolism or after intense training to speed your \
                        recovery. Each serving of ISO•100 has 5.5 grams of BCAAs including 2.7 grams of \
                        L-Leucine, the BCAA that is directly involved in in optimizing Muscle Protein \
                        Synthesis to ensure your workouts are not going to waste.The Highest Level of \
                        Purity. ISO•100 uses only whey proteins derived from cross-flow microfiltration \
                        processing (cold-filtered) to preserve the many important whey protein fractions \
                        including lactoferrin and immunoglobins, which can be lost in other forms of \
                        processing. We have carefully formulated ISO•100 to deliver more of what you want, \
                        and less of what you don't want: free of gluten, fat and lactose, plus less than one \
                        gram of sugar. With only a short list of ingerdients, it is easy to see why ISO•100 is \
                        one of the purest proteins available. In addition, ISO•100 is produced in our own GMP \
                        manufacturing facility and is Informed-Choice® Trusted by Sport certified providing \
                        assurance to the athletic community that ISO•100 is free of banned substances. New \
                        Improved Tate. Dymatize has taken flavor to a whole new level! Our in-house flavor \
                        specialists worked long and hard to create an even more delicious taste. ISO•100, the \
                        reward you deserve for all your hard work and dedication. So delightfully delicious, you \
                        will look forward to the next shake."],
        nutritionFactsImage: "/images/ISO100-nutrition-facts.png",
        rating: 4,
        imageUrl: "/images/ISO100.png"
    },
    {
        itemCode: 4,
        itemName: "Isopure® Whey Protein Isolate",
        catalogCategory: "WHEY PROTEIN",
        descriptionTitle: ["PRODUCT OVERVIEW","CONVENIENCE"],
        description: ["Natures Best Isopure Whey Protein Isolate contains 26 grams per serving of pure, \
                        unadulterated 100% whey protein isolate. Any and all impurities typically found in \
                        most whey proteins have been removed to provide you with great tasting, lactose free, \
                        state of the art carbohydrate free protein supplement."
                        ,"Natures Best Isopure Whey Protein Isolate is a convenient way to fortify your \
                        favorite foods. You simply add Isopure Unflavored Whey Protein Isolate directly \
                        to hot food, cold food or beverages. And since it is virtually tasteless, it is \
                        the perfect addition to your favorite recipes. It is 100% natural, and has no fat, \
                        carbs, sugars or lactose. It has no fillers, no artificial flavors, and no artificial \
                        sweeteners. Nature's Best set out to create a product that didn't hide \
                        anything from its customers. We wanted you to know that you're purchasing the \
                        best product available on the market. Our protein source is clearly identified as \
                        100% Pure Whey Protein Isolate. We didn't try to confuse you by listing a protein \
                        blend that doesn't tell you how much of the product is superior whey protein \
                        isolate and how much is whey protein concentrate or sweet whey or some other \
                        inferior protein source. It is instantized so it can be taken anywhere and be \
                        easily mixed with a spoon."],
        nutritionFactsImage: "/images/isopure-nutrition-facts.png",
        rating: 4,
        imageUrl: "/images/isopure.png"
    },
    {
        itemCode: 5,
        itemName: "BCAA Energy",
        catalogCategory: "BCAA",
        descriptionTitle: ["Ultrapremium BCAAS in proven 2:1:1 Ratio:","Recovery Energy and Endurance Boosters*:","Natural Energizers:"],
        description: ["L-LEUCINE: Helps supply energy to muscles and support muscle protein synthesis.*\
                        L-ISOLEUCINE: Supports muscle tissue development, recovery and lean body mass.*\
                        L-VALINE: Plays a key role in supplying energy to muscles.*"
                        ,"BETA ALANINE: Supports the buffering of lactic acid* \
                        L-ALANINE: Supports glucose production for usable energy, endurance and recovery*\
                        TAURINE: Supports cell hydration, metabolism and mental focus in combination with caffeine*\
                        VITAMIN B&C COMPLEX: Vitamin B6 and B12 help support energy levels through intense workouts plus Vitamin C's powerful antioxidant and supports a healthy immune system.*"
                        ,"Green Coffee and Green Tea: Natural Caffeine sources for cleaner energy and antioxidants*"],
        nutritionFactsImage: "/images/bcaa-energy-nutrition-facts.png",
        rating: 4,
        imageUrl: "/images/bcaa-energy.png" 
    },
    {
        itemCode: 6,
        itemName: "Essential AmiN.O. Energy",
        catalogCategory: "BCAA",
        descriptionTitle: ["OPTIMUM TRUE STRENGTH","QUALITY","CONSISTENCY","HISTORY & HERITAGE"],
        description: ["True Strength is a journey. It never rests, it never quits. It's about overcoming \
                        obstacles, accomplishing goals, and recognizing achievements. And then it resets to \
                        achieve again. As your trusted sports nutrition partner in goal achievement, ON \
                        demonstrates that same passion while crafting our products. From the raw materials \
                        we source to our state-of-the-art manufacturing processes, no compromises are made. \
                        You set the bar higher after every workout, we set the bar higher to redefine the \
                        industry standards and ensure you realize optimum results."
                        ,"Whey protein isolates are the purest form of whey and the main ingredient in Gold \
                        Standard 100% Whey™. Each serving provides 24 grams of rapidly digesting whey protein \
                        with low levels of fat, cholesterol, lactose and other stuff you can do without making \
                        Gold Standard 100% Whey™ the standard all other proteins are measured against."
                        ,"Optimum Nutrition has been spotting the efforts of goal driven individuals since 1986. \
                        As one of the few companies to operate state-of-the-art manufacturing facilities that are \
                        GMP compliant, ON assures that every shake will mix up effortlessly because of its \
                        first-to-market instantization process. You also expect each shake to taste the same as \
                        the last and your next. That's the kind of consistency ON delivers."
                        ,"Optimum Nutrition is legendary for both quality and innovation. In addition to \
                        producing the world's best-selling whey protein, ON's Gold Standard 100% Casein™ \
                        introduced slow-digesting nighttime protein to the weight training world and \
                        Essential Amino Energy™ created the anytime energy category in sports nutrition. \
                        When technology makes advancements possible, ON will be the company bringing it \
                        first to your shaker cup."],
        nutritionFactsImage: "/images/essential-amino-acids-nutrition-facts.png",
        rating: 4,
        imageUrl: "/images/essential-amino-acids.png"
    },
    {
        itemCode: 7,
        itemName: "BCAA 5000",
        catalogCategory: "BCAA",
        descriptionTitle: ["Ultrapremium BCAAS in proven 2:1:1 Ratio:"],
        description: ["L-LEUCINE: Helps supply energy to muscles and support muscle protein synthesis.*\
                        L-ISOLEUCINE: Supports muscle tissue development, recovery and lean body mass.*\
                        L-VALINE: Plays a key role in supplying energy to muscles.*"],
        nutritionFactsImage: "/images/bcaa-5000-nutrition-facts.png",
        rating: 3,
        imageUrl: "/images/bcaa-5000.png" 
    },
    {
        itemCode: 8,
        itemName: "Scivation Xtend",
        catalogCategory: "BCAA",
        descriptionTitle: ["XTEND® THE ORIGINAL","THIRD-PARTY TESTED & CERTIFIED"],
        description: ["For over 10 years, XTEND® has been making the best recovery products in the world. \
        The award-winning XTEND® Original formula is powered by 7 grams of branched-chain amino acids \
        (BCAAs), which have been clinically shown to support muscle repair, recovery, and growth. XTEND® \
        Original also contains a unique blend of hydrating electrolytes and additional performance \
        ingredients to help you refuel, repair, and recover.* The three BCAAs are leucine, isoleucine, \
        and valine. It's important to note that many BCAA formulas contain only 5 grams of BCAAs per \
        serving, which means they may lack enough leucine to effectively stimulate muscle protein synthesis \
        (MPS). Every serving of XTEND® Original contains 3.5 grams of leucine to stimulate MPS, as well as \
        1.75 grams each of isoleucine and valine, in the research-backed 2:1:1 ratio found in nature.* \
        Whatever your fitness goal, training style, or sport of choice, XTEND® can help you train harder, \
        recover faster, and get back in the game sooner. Try all the sugar-free, zero-calorie, \
        mouthwatering flavors of XTEND® Original to fuel your fitness goals.*"
        ,"XTEND® Original is NSF Certified for Sport® and Informed-Choice certified. These preeminent \
        third-party testing and quality assurance programs are recognized for their dedication to keeping \
        nutritional supplements clean, free from banned substances, and safe for consumption. It's rare to \
        obtain even one certification, but XTEND® Original proudly carries certifications from both \
        organizations so you can consume our BCAAs with the utmost confidence.* XTEND® is often credited \
        with launching the entire intra-workout BCAA category, and we've been leading it ever since. \
        On top of our certifications, XTEND® Original is also research-backed and has been shown effective \
        in two university studies.*"],
        nutritionFactsImage: "/images/xtend-nutrition-facts.png",
        rating: 5,
        imageUrl: "/images/xtend.png" 
    },
    {
        itemCode: 9,
        itemName: "Pre JYM",
        catalogCategory: "PRE-WORKOUT SUPPLEMENTS",
        descriptionTitle: ["The Power of Pre JYM - No Proprietary Blends","Proper Amounts"
                            ,"No 'Abbreviated' Formulas","No Concentrates","JS, Not BS"],
        description: ["Look at the supplement facts panel on your favorite pre-workout product and you'll \
        most likely see the term “proprietary blend.” Supplement companies want you to think this means \
        they've created a special blend of ingredients that magically work together to deliver unique \
        results. Because this blend is so amazing, they have to keep the amounts of each ingredient secret \
        so no other company steals the formula. The truth, however, is that propriety blends can serve a \
        different purpose. They allow some supplement companies to hide how little of each ingredient \
        they've actually put in a product. This can result in cheap, under-dosed, ineffective supplements. \
        Pre JYM doesn't use proprietary blends. Take a look at the supplement facts panel and you'll see \
        the actual amounts of all 13 ingredients. I have nothing to hide. I'm proud of the amount of each \
        and every ingredient I've included."
        ,"For the reasons detailed above, many supplement companies are moving toward transparency and \
        axing proprietary blends. That's a good thing. However, some of these companies are still guilty \
        of grossly under-dosing ingredients. Take citrulline malate, for example. The research on this \
        potent amino acid shows that you need 6 grams per serving. Most pre-workout products leave out \
        citrulline entirely, and only a few of them provide anywhere close to 6 grams."
        ,"A handful of companies are as fed up as I am with proprietary blends and under-dosed formulas, \
        but they fall short by using “abbreviated” formulas. An abbreviated formula is one that uses \
        proper dosing of all ingredients, but only includes a few ingredients. Take, for example, a \
        pre-workout formula that includes beta-alanine, creatine, caffeine, and tyrosine. There's nothing \
        wrong with it, but it could be made a lot more effective through the addition of ingredients like \
        citrulline malate, betaine, and BCAAs, to name just a few. Why would companies not create the most \
        robust formula possible? Because adding more ingredients costs too much money. Pre JYM includes 13 \
        ingredients that complement one another to prime the body for intense workouts, making it a complete \
        pre-workout supplement. If you're looking for the most complete exercise supplement program available \
        on the market today, take my Post JYM Active Matrix after your workout to get even greater amounts of \
        potent ingredients like Creatine HCl, Betaine, and Beta-Alanine."
        ,"Some companies also try to trick buyers by calling their pre-workout product “concentrated.” A \
        serving of one of these “concentrated” products can contain as few as 3 to 6 grams of powder. What \
        kind of magic did they use to cram enough creatine, beta-alanine, citrulline, arginine, caffeine, \
        and other ingredients into that tiny serving? They didn't use any magic, which is why some of those \
        “concentrated” formulas also include proprietary blends. That's also why the serving size of Pre JYM \
        is more than 26 grams. It contains 13 ingredients at proper, powerful amounts."
        ,"I've been studying supplement science in the lab and gym for decades. I've been delivering \
        supplement advice to millions of people in the pages of Muscle & Fitness, FLEX, and Muscle & \
        Fitness Hers, as well as here on Bodybuilding.com and my own website, JimStoppani.com, for over \
        a decade. Most importantly, I've been training since I was 11 years old. Before each of my workouts, \
        I would draw on all of my experience and all of my education to concoct my own pre-workout supplement, \
        combining ingredients from 13 different bottles and tubs. That's why I developed Pre JYM. I wanted \
        to give my friends, colleagues, all of you, and myself the ability to access, in one bottle, the \
        best ingredients in amounts suggested to help build lean muscle, torch body fat, improve strength, \
        and boost speed.*"],
        nutritionFactsImage: "/images/pre-jym-nutrition-facts.png",
        rating: 5,
        imageUrl: "/images/pre-jym.png"
    },
    {
        itemCode: 10,
        itemName: "PRE-KAGED",
        catalogCategory: "PRE-WORKOUT SUPPLEMENTS",
        descriptionTitle: ["YOUR WORKOUT PRIMER IS HERE","ONE PRODUCT TO DOMINATE THEM ALL"
                            ,"WHY PRE-KAGED® IS SENDING SHOCKWAVES THROUGH THE BODYBUILDING COMMUNITY"],
        description: ["Discover the high-performance power of this revolutionary formula from Kaged \
        Muscle® Supplements. PRE-KAGED® - There’s absolutely nothing else like it on the sports supplement \
        market. NOTHING!"
        ,"Around 7 years ago, when Kris Gethin began testing other brands for safety, purity, and \
        performance, it quickly dawned on him that he would have to mix his own single fill ingredients \
        in the doses he knew were effective to gain better performance and results that would only benefit \
        his physique. Years later, we are lucky enough to have assembled multiple patented and fully tested \
        ingredients in one supplement to create the most unbelievable pre-workout that’s fueled some of the \
        most unbelievable workouts."
        ,"When you take PRE-KAGED® something happens. You scoop… add water… shake or stir… drink… then \
        soon after… it happens. It will focus you and shock your muscles into overdrive to help you crush \
        personal records and workout plateaus.* We have always considered the mind-to-muscle connection the \
        secret weapon. When you can tap into intensity, focus, energy, you’re on the path to success. When \
        you couple this with prolonged, physical exertion, you’re able to achieve goals and destroy personal \
        records."],
        nutritionFactsImage: "/images/pre-kaged-nutrition-facts.png",
        rating: 5,
        imageUrl: "/images/pre-kaged.png"
    },
    {
        itemCode: 11,
        itemName: "N.O.-Xplode",
        catalogCategory: "PRE-WORKOUT SUPPLEMENTS",
        descriptionTitle: ["THE ORIGINAL PRE-WORK IGNITER. JUST GOT BETTER.","HOW WILL N.O.-XPLODE® ENHANCE MY WORKOUT?"
                            ,"Explosive Energy","Maximum Performance","Enhanced Endurance","Amazing Taste"],
        description: ["275mg of caffeine, 1.8g of Beta-Alanine, and unrivaled focus. Get ready to slam \
        plates longer and workout harder. BSN® has re-ignited N.O.-XPLODE®, the first complete pre-workout \
        that launched in 2004 and has been helping athletes break through barriers ever since. Now with \
        more energy, more feel, more focus, and amazing taste. The weights won’t know what hit them."
        ,"N.O.-XPLODE® is a pre-training igniter designed for athletes of all levels to help maximize \
        workout performance. To achieve the most effective training session, both mental and physical \
        energy are a must. Focus is then needed to harness this energy and drive a strong mind-muscle \
        connection. This mind-muscle connection will help you achieve a greater workout intensity, \
        enhanced strength*, and will help you push your body past previous limits. A complete pre-workout \
        supplement should support all of these benefits. N.O.-XPLODE® was designed with advanced ingredient \
        technology to help deliver increased energy and endurance, support mental focus and muscular \
        strength*, and provide second-to-none intensity and performance."
        ,"Now with 275mg of caffeine, N.O.-XPLODE® will give you the energy and focus needed to help \
        maximize every minute of your workout. BSN has enhanced the Thermic Energy blend so you can push \
        your workout intensity to new levels."
        ,"Muscular strength, power and endurance are supported by creatine in the body. The innovative \
        ingredient technology of our Myogenic Matrix™, featuring an advanced creatine blend, helps every \
        athlete reach their goal of maximizing performance."
        ,"Whether you're slammin' weights in the gym or killin' it on the field, the Endura Shot™ blend, \
        now with 1.8g of Beta-Alanine, will help you go longer and harder than before."
        ,"Effective product and amazing taste? That’s BSN. You can try N.O.-XPLODE® in 5 delicious \
        flavors: Fruit Punch, Blue Raz, Watermelon, Grape and Green Apple."],
        nutritionFactsImage: "/images/xplode-nutrition-facts.png",
        rating: 4,
        imageUrl: "/images/xplode.png"
    },
    {
        itemCode: 12,
        itemName: "Gold Standard Pre-Workout",
        catalogCategory: "PRE-WORKOUT SUPPLEMENTS",
        descriptionTitle: ["OPTIMUM TRUE STRENGTH","QUALITY","CONSISTENCY","HISTORY & HERITAGE"],
        description: ["True Strength is a journey. It never rests, it never quits. It's about overcoming \
                        obstacles, accomplishing goals, and recognizing achievements. And then it resets to \
                        achieve again. As your trusted sports nutrition partner in goal achievement, ON \
                        demonstrates that same passion while crafting our products. From the raw materials \
                        we source to our state-of-the-art manufacturing processes, no compromises are made. \
                        You set the bar higher after every workout, we set the bar higher to redefine the \
                        industry standards and ensure you realize optimum results."
                        ,"Whey protein isolates are the purest form of whey and the main ingredient in Gold \
                        Standard 100% Whey™. Each serving provides 24 grams of rapidly digesting whey protein \
                        with low levels of fat, cholesterol, lactose and other stuff you can do without making \
                        Gold Standard 100% Whey™ the standard all other proteins are measured against."
                        ,"Optimum Nutrition has been spotting the efforts of goal driven individuals since 1986. \
                        As one of the few companies to operate state-of-the-art manufacturing facilities that are \
                        GMP compliant, ON assures that every shake will mix up effortlessly because of its \
                        first-to-market instantization process. You also expect each shake to taste the same as \
                        the last and your next. That's the kind of consistency ON delivers."
                        ,"Optimum Nutrition is legendary for both quality and innovation. In addition to \
                        producing the world's best-selling whey protein, ON's Gold Standard 100% Casein™ \
                        introduced slow-digesting nighttime protein to the weight training world and \
                        Essential Amino Energy™ created the anytime energy category in sports nutrition. \
                        When technology makes advancements possible, ON will be the company bringing it \
                        first to your shaker cup."],
        nutritionFactsImage: "/images/gold-standard-pre-workout-nutrition-facts.png",
        rating: 4,
        imageUrl: "/images/gold-standard-pre-workout.png"
    }
];

module.exports.getItems = function () {
    
    var itemsCategory = [];
    for (var i = 0; i < data.length; i++) {
        var item = new Item(data[i].itemCode,
            data[i].itemName,
            data[i].catalogCategory,
            data[i].descriptionTitle,
            data[i].description,
            data[i].nutritionFactsImage,
            data[i].rating,
            data[i].imageUrl);
        
        itemsCategory.push(item);
        
    } 
    return itemsCategory;
    
};


module.exports.getItem = function (itemCode) {
    for (var i = 0; i < data.length; i++) {
        if (parseInt(data[i].itemCode) == itemCode) {
            var item = new Item(data[i].itemCode,
                data[i].itemName,
                data[i].catalogCategory,
                data[i].descriptionTitle,
                data[i].description,
                data[i].nutritionFactsImage,
                data[i].rating,
                data[i].imageUrl);
        
            return item;
        }
    }
};

var categories = ['WHEY PROTEIN','BCAA','PRE-WORKOUT SUPPLEMENTS'];

module.exports.getCategories = function(){
    return categories;
};

module.exports.isExist = function(itemCode){
    var exist = false;
    for (var i = 0; i < data.length; i++) {
        if (parseInt(data[i].itemCode) == itemCode) {
            exist = true;
        }
    }
    return exist;
}