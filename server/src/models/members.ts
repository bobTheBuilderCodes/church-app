import { Schema, model } from 'mongoose';



const memberSchema = new Schema({
  // Basic information
  
  imageSrc: { type: String },
  name: { type: String, required: true },
  email: { type: String},
  phoneNumber: { type: String },
  address: { type: String },
  ministry: {type: String},
  
  // Church-related details
  gender: { type: String, enum: ['Male', 'Female'] }, 
  dateOfBirth: { type: Date }, 
  maritalStatus: { type: String, enum: ['Single', 'Married', 'Divorced', 'Widowed'], default: 'Single' },

  // Church-specific information
  dateJoined: { type: Date, default: Date.now }, 
  membershipStatus: { type: String, enum: ['Active', 'Inactive', 'Deceased, "Yes'], default: 'Active' }, 
  baptized: { type: Boolean, default: false }, 
  baptismDate: { type: Date }, 
  roleInChurch: { type: String, enum: ['Member', 'Deacon', 'Pastor', 'Choir', 'Usher'], default: 'Member' }, 


  // Contributions and activities
  contributions: [{ 
    amount: { type: Number }, 
    date: { type: Date, default: Date.now }, 
    purpose: { type: String } // Tithe, Offering, Donation, etc.
  }], // Record of contributions

  attendanceRecord: [{ 
    serviceDate: { type: Date, default: Date.now }, 
    attended: { type: Boolean, default: true } 
  }], // Track attendance for services/events

  // Additional optional fields
  occupation: { type: String }, // Member's occupation
  emergencyContact: { 
    name: { type: String }, 
    phone: { type: String } 
  }, // Emergency contact info
  notes: { type: String } // Any additional notes on the member
});

export const ChurchMember = model('Member', memberSchema);
