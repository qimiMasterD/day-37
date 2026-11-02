import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { defineConfig } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
    base: "/day-37/",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
