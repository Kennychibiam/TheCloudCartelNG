import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "p5ciugur", //id can be found in sanity.json
  dataset: "production",
});
