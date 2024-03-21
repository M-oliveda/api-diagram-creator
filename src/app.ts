import express, { NextFunction, Request, Response } from "express";
import { spawn } from "child_process";
import { existsSync, rmSync, writeFileSync } from "fs";
import { glob } from "glob";

const app = express();

app.use(express.text());

function cleanUpOlderFiles(req: Request, resp: Response, next: NextFunction) {
  if (existsSync("temp-file.py")) {
    rmSync("temp-file.py");
  }

  glob("*.png").then((files) => {
    for (const file of files) {
      rmSync(file);
    }
  });

  next();
}

app.get("/api/diagram", cleanUpOlderFiles, (req: Request, resp: Response) => {
  if (req.body == "") {
    resp
      .status(400)
      .send({ message: "You need to parse a valid python file." });
  }

  writeFileSync("temp-file.py", req.body, "utf-8");

  const terminal = spawn("python", ["temp-file.py"]);

  terminal.on("close", () => {
    glob("*.png").then((files) =>
      resp.status(200).sendFile(files[0], { root: "." }),
    );
  });
});

export { app };
