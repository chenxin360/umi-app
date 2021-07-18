import { defineConfig } from "umi";
import routes from "./routes";

export default defineConfig({
  routes: routes,
  dynamicImport: {},
  fastRefresh: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: []
  }
})
