import { Request, Response } from 'express';
import { ChurchMember } from '../models/members';
import { BAD_REQUEST, INTERNAL_SERVER_ERROR, NOT_FOUND, OK, CREATED } from '../utils';

// Get all church members
export const getAllChurchMembers = async (req: Request, res: Response): Promise<void> => {
  try {
    const members = await ChurchMember.find().sort({ _id: -1 });
    if (members.length === 0) {
      res.status(404).json({ message: 'No church members found' });
    } else {
      res.status(200).json(members);
    }
  } catch (error) {
    res.status(500).json({ message: INTERNAL_SERVER_ERROR });
  }
};

// Add a new church member
export const addChurchMember = async (req: Request, res: Response): Promise<void> => {
  try {
    const newMember = new ChurchMember(req.body);
    const newMemberName = req.body.name
    await newMember.save();
    res.status(201).json({ message: `${newMemberName} added to church successfully`, data: newMember });
  } catch (error) {
    res.status(500).json({ message: INTERNAL_SERVER_ERROR });
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
      res.status(200).json({ message: OK, data: updatedMember });
    }
  } catch (error) {
    res.status(500).json({ message: INTERNAL_SERVER_ERROR });
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
    res.status(500).json({ message: INTERNAL_SERVER_ERROR });
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
      res.status(200).json({ message: OK, data: deletedMember });
    }
  } catch (error) {
    res.status(500).json({ message: INTERNAL_SERVER_ERROR });
  }
};
