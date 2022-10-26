import asyncHandler from "express-async-handler";
import Goal from "../models/goalModel.js";

// @desc    Get goals
// @route   Get api/v1/goals
// @access  Private
export const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
});
// @desc    Post goals
// @route   Post api/v1/goals
// @access  Private
export const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400).json({ Message: "please add a text field" });
  }

  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json(goal);
});

// @desc    Put goals
// @route   Put api/v1/goals
// @access  Private
export const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new error("goal not found");
  }

  const updategoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updategoal);
});

// @desc    Delete goals
// @route   Delete api/v1/goals
// @access  Private
export const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new error("goal not found");
  }

  await goal.remove();
  res.status(200).json(`deleted goal: ${req.params.id}`);
});
