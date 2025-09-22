import gsap from "gsap";
import splitText from "gsap/SplitText";

gsap.registerPlugin(splitText);

document.fonts.ready.then(() => {
    function createSplitTexts(element) {
        const splits = {};
        element.forEach(({ key, selector, type}) => {
            const config = { type, mask: type };

            if (type === "chars") config.charsClass = "char";
            if (type === "lines") config.linesClass = "line";
            splits[key] = SplitText.create(selector, config);
        });
        return splits;

    }

    const splitElements = [
        {key: 'logoChars', selector: ".preloaders-logo h1", type: "chars"},
        {key: 'footerLines', selector: ".preloader-footer p", type: "lines"},
        {key: 'headerChars', selector: ".header h1", type: "chars"},

    ];
    const splits = createSplitTexts(splitElements);

    gsap.set([splits.logoChars.chars], { x: 100% });
    gsap.set([
        splits.footerLines.lines,
        splits.headerChars.chars
    ], { y: 100% });
    gsap.set(".btn-icon", {clipPath: "circle(0% at 50% 50%)"});
    gsap.set()
})