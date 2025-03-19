import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import apiRoutes from "./api-routes";

export async function registerRoutes(app: Express): Promise<Server> {
  // prefix all routes with /api
  app.use("/api", apiRoutes);

  const httpServer = createServer(app);

  return httpServer;
}
