const { Router } = require(`express`);
const User = require(`../modules/registration`);
const router = Router();

router.get(`/`, (req, res) => {
  res.render(`index`);
});

router.get(`/success`, (req, res) => {
  res.render(`index`);
});

router.post(`/register`, async (req, res) => {
  const user = new User({
    cusine: req.body.cusine,
    followers: req.body.followers,
    email: req.body.email
  });

  await user.save();
  res.redirect(`/success`)
})

module.exports = router;
