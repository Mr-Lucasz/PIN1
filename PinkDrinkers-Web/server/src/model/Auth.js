const { supabase } = require('../database');


exports.createUser = async (req, res) => {
  const { email, password } = req.body;
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  return res.json({ user });
};