import { Router } from 'express';
import { addChurchMember, deleteChurchMember, editChurchMember, getAllChurchMembers, getChurchMemberById } from '../controllers/members';

const churchMemberRoutes = Router();

churchMemberRoutes.get('/members', getAllChurchMembers);

churchMemberRoutes.post('/members', addChurchMember);

churchMemberRoutes.put('/members/:memberId', editChurchMember);


churchMemberRoutes.get('/members/:memberId', getChurchMemberById); 

churchMemberRoutes.delete('/members/:memberId', deleteChurchMember);

export default churchMemberRoutes;
