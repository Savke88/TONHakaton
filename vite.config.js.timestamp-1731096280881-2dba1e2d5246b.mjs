
// vite.config.js
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import react from "file:///D:/TON/TONHakaton/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { defineConfig } from "file:///D:/TON/TONHakaton/node_modules/vite/dist/node/index.js";
import mkcert from "file:///D:/TON/TONHakaton/node_modules/vite-plugin-mkcert/dist/mkcert.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/TON/TONHakaton/vite.config.js";
var vite_config_default = defineConfig({
  base: "/reactjs-js-template",
  plugins: [
    // Allows using React dev server along with building a React application with Vite.
    // https://npmjs.com/package/@vitejs/plugin-react-swc
    react(),
    // Create a custom SSL certificate valid for the local machine.
    // https://www.npmjs.com/package/vite-plugin-mkcert
    mkcert()
  ],
  publicDir: "./public",
  server: {
    // Exposes your dev server and makes it accessible for the devices in the same network.
    host: true
  },
  resolve: {
    alias: {
      "@": resolve(dirname(fileURLToPath(__vite_injected_original_import_meta_url)), "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxUT05cXFxcVE9OSGFrYXRvblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcVE9OXFxcXFRPTkhha2F0b25cXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1RPTi9UT05IYWthdG9uL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGlybmFtZSwgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCc7XHJcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICdub2RlOnVybCc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IG1rY2VydCBmcm9tICd2aXRlLXBsdWdpbi1ta2NlcnQnO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBiYXNlOiAnL3JlYWN0anMtanMtdGVtcGxhdGUnLFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIC8vIEFsbG93cyB1c2luZyBSZWFjdCBkZXYgc2VydmVyIGFsb25nIHdpdGggYnVpbGRpbmcgYSBSZWFjdCBhcHBsaWNhdGlvbiB3aXRoIFZpdGUuXHJcbiAgICAvLyBodHRwczovL25wbWpzLmNvbS9wYWNrYWdlL0B2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1xyXG4gICAgcmVhY3QoKSxcclxuICAgIC8vIENyZWF0ZSBhIGN1c3RvbSBTU0wgY2VydGlmaWNhdGUgdmFsaWQgZm9yIHRoZSBsb2NhbCBtYWNoaW5lLlxyXG4gICAgLy8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2Uvdml0ZS1wbHVnaW4tbWtjZXJ0XHJcbiAgICBta2NlcnQoKSxcclxuICBdLFxyXG4gIHB1YmxpY0RpcjogJy4vcHVibGljJyxcclxuICBzZXJ2ZXI6IHtcclxuICAgIC8vIEV4cG9zZXMgeW91ciBkZXYgc2VydmVyIGFuZCBtYWtlcyBpdCBhY2Nlc3NpYmxlIGZvciB0aGUgZGV2aWNlcyBpbiB0aGUgc2FtZSBuZXR3b3JrLlxyXG4gICAgaG9zdDogdHJ1ZSxcclxuICB9LFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogcmVzb2x2ZShkaXJuYW1lKGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSksICcuL3NyYycpLFxyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG5cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyTyxTQUFTLFNBQVMsZUFBZTtBQUM1USxTQUFTLHFCQUFxQjtBQUM5QixPQUFPLFdBQVc7QUFDbEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxZQUFZO0FBSjRILElBQU0sMkNBQTJDO0FBT2hNLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQTtBQUFBO0FBQUEsSUFHUCxNQUFNO0FBQUE7QUFBQTtBQUFBLElBR04sT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQTtBQUFBLElBRU4sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssUUFBUSxRQUFRLGNBQWMsd0NBQWUsQ0FBQyxHQUFHLE9BQU87QUFBQSxJQUMvRDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
