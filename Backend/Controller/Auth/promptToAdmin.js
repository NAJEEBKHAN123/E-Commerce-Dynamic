// const User = require("../../models/userMode"); // Replace with the correct path to your User model

// const promoteToAdmin = async (req, res) => {
//   try {
//     const { userId } = req.body;

//     const user = await User.findByIdAndUpdate(
//       userId,
//       { role: "admin" },
//       { new: true }
//     );

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json({ message: "User promoted to admin", user });
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error", error });
//   }
// };

// module.exports = { promoteToAdmin }; // Make sure this is exported
