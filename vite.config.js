import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh()],
    server: {
        proxy: {
            "/api": "http://localhost:8080", // same port as server
        },
    },
});
