import express from "express";

const userRouter = express.Router();

userRouter.post("/user", (req, res) => {
  const {} = req.body;
});

userRouter.get("/user", (req, res) => {});

userRouter.get("/user/:id", (req, res) => {
  const { id } = req.params;
  res.json({ userId: id });
});

userRouter.put("/user/:id", (req, res) => {
  const { id } = req.params;
  const {} = req.body;
  res.json({ userId: id });
});

userRouter.delete("/user/:id", (req, res) => {
  const { id } = req.params;
  res.json({ userId: id });
});
