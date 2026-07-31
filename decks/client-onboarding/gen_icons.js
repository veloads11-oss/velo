const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");
const {
  FaShieldAlt,
  FaCreditCard,
  FaImages,
  FaBuilding,
  FaBullhorn,
  FaFacebookF,
  FaInstagram,
  FaChartLine,
  FaCheckCircle,
} = require("react-icons/fa");

const icons = {
  shield: FaShieldAlt,
  card: FaCreditCard,
  images: FaImages,
  building: FaBuilding,
  bullhorn: FaBullhorn,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  chart: FaChartLine,
  check: FaCheckCircle,
};

async function run() {
  for (const [name, Icon] of Object.entries(icons)) {
    const svg = ReactDOMServer.renderToStaticMarkup(
      React.createElement(Icon, { size: 256, color: "#FFFFFF" })
    );
    await sharp(Buffer.from(svg), { density: 300 })
      .resize(256, 256)
      .png()
      .toFile(`${name}.png`);
    console.log(`wrote ${name}.png`);
  }
}

run();
