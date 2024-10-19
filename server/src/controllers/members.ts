import { Request, Response } from 'express';
import { ChurchMember } from '../models/members';
import { BAD_REQUEST, INTERNAL_SERVER_ERROR, NOT_FOUND, OK } from '../utils';

// Get all church members
export const getAllChurchMembers = async (req: Request, res: Response): Promise<void> => {
  try {
    const members = await ChurchMember.find().sort({_id: -1}); 
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ message: INTERNAL_SERVER_ERROR });
  }
};

// Add a new church member
export const addChurchMember = async (req: Request, res: Response): Promise<void> => {
  try {
    const newMember = new ChurchMember(req.body);
    await newMember.save();
    res.status(201).json(newMember);
  } catch (error) {
    res.status(400).json({ message: BAD_REQUEST });
  }
};

// Edit church member details
export const editChurchMember = async (req: Request, res: Response): Promise<void> => {
  try {
    const { memberId } = req.params;
    const updatedMember = await ChurchMember.findByIdAndUpdate(memberId, req.body, { new: true });
    if (!updatedMember) {
      res.status(404).json({ message: NOT_FOUND });
    } else {
      res.status(200).json(updatedMember);
    }
  } catch (error) {
    res.status(400).json({ message: BAD_REQUEST });
  }
};


// Get a church member by ID
export const getChurchMemberById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { memberId } = req.params;
    const member = await ChurchMember.findById(memberId);
    if (!member) {
      res.status(404).json({ message: 'Church member not found' });
    } else {
      res.status(200).json(member);
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve church member' });
  }
};


// Delete church member
export const deleteChurchMember = async (req: Request, res: Response): Promise<void> => {
  try {
    const { memberId } = req.params;
    const deletedMember = await ChurchMember.findByIdAndDelete(memberId);
    if (!deletedMember) {
      res.status(404).json({ message: NOT_FOUND });
    } else {
      res.status(200).json({ message: OK });
    }
  } catch (error) {
    res.status(500).json({ message: INTERNAL_SERVER_ERROR });
  }
};
