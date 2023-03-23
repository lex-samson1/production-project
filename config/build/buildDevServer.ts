import type { Configuration as DevServerConfiguration } from "webpack-dev-server"; // Переименуем, чтобы не было пересечений с configuration webpack
import { BuildOptions } from "./types/config";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
    };
}
