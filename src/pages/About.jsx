
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about-page">
      <p className="eyebrow">A LITTLE ABOUT ME</p>

      <h1>Hi, I'm Kass.</h1>

      <p className="about-intro">
        The person behind kass.works.
      </p>

      <p>
        kass.works started pretty simply: 
        a friend needed someone to stay at his place 
        and look after his dog while he was away. 
        I was happy to help — and it made me wonder, 
        why not help other people too?
      </p>

      <p>
        I've recently moved back home, 
        which gives me a little more freedom 
        to spend time away from my own place. 
        Pet and house sitting felt like 
        a pretty great way to use that flexibility: 
        spend time with animals, 
        help people enjoy their time away 
        without worrying about home, 
        and make some extra money doing something 
        I genuinely enjoy.
      </p>

      <h2>I'm usually the one hanging out with the dog.</h2>

      <p>
        I've been around and cared for dogs for years. 
        Repede, a Jack Russell/Miniature Pinscher mix, 
        was part of my life for 11 years. 
        I've also looked after friends' and neighbours' 
        pets over the years — from Duke, 
        the yellow Lab I dog-sat in high school, 
        to Suji, Dante the cat, 
        and most recently my new pal Hal Johnson.
      </p>

      <p>
        I'm also just that person at a party. 
        If there's a dog there, there's a pretty good chance 
        I'll end up on the floor playing with them 
        or with one curled up beside me.
        I love long dog walks, games of fetch, 
        couch cuddles and getting to know 
        all the funny little things 
        that make each animal themselves. 
        I genuinely think dogs have some of the purest souls around, 
        and being around them makes me happy.
      </p>

      <h2>Your routine, not mine.</h2>

      <p>
        Every pet is different, 
        and I think one of the best things 
        I can do while their person is away 
        is keep life feeling as normal as possible.
      </p>

      <p>
        Before caring for a new pet, I want to learn their routine: 
        meals, walks, medications, commands, favourite toys, 
        sleeping habits, fears, quirks, reactivity 
        and all the other little things you know 
        about your animal that I don't yet.
        And yes — detailed instructions are welcome.
      </p>

      <p>
        The same goes for communication. 
        Want photos and little updates while you're gone? Happily. 
        Prefer to switch vacation mode on 
        and trust that everything at home is handled? 
        That's okay too. We'll decide what works for you.
      </p>

      <h2>Your home matters, too.</h2>
      
      <p>
        Being trusted with someone's home 
        is something I take seriously. 
        I treat it the way I'd want someone to treat mine: 
        no visitors, respect your privacy, clean up after myself 
        and leave things at least as good as I found them.        
      </p>

      <p>
        My background includes healthcare administration, 
        leadership, customer service and tech — work 
        that's taught me a lot about responsibility, 
        privacy, organization, problem-solving 
        and being someone others can depend on.
      </p>

      <p>
        When I'm not working, you'll usually find me hiking, 
        camping, preparing for tree-planting season, 
        coding or building something, sewing, catching a concert, 
        or finding some other project to get myself into.
      </p>

      <p>
        That's also where kass.works comes from.
      </p>

      <p>
        I work hard, I work well, 
        and I have a pretty versatile collection of skills. 
        Today that might mean walking your dog 
        or taking care of your home while you're away. 
        Tomorrow, who knows?
      </p>

      <p>
        If we meet and you walk away thinking, 
        “She has great energy, I trust her, and my dog likes her,” 
        then kass.works is doing exactly what I want it to do.
      </p>

      <Link to="/contact" className="btn">
        Let's Get Acquainted
      </Link>
    </section>
  );
}

export default About;
