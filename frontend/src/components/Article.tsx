import React from 'react';
import CommentsSection from './CommentSection';
import AudioPlayer from './AudioPlayer';
import MoreBears from './MoreBears';
import Author from './Author';
import WildBearImage from '../assets/images/wild-bear.jpg';
import UrbanBearImage from '../assets/images/urban-bear.jpg';

function Article(): React.JSX.Element {
  return (
      <article>
        <section className="content">
          <h2>The trouble with Bears</h2>
          <p>By Evan Wild</p>
          <p>
            Tall, lumbering, angry, dangerous. The real live bears of this world
            are proud, independent creatures, self-serving and always on the hunt
            for food. Nothing like the bears you see on TV, like Baloo from
            renowned documentary, The Jungle Book.
          </p>
          <p>
          So what are bears really like, and why does the world's media portray 
          them with such a skewed vision? In this article we try to answer those 
          questions, and give you a real insight into the life of the bear. 
          </p>
          <h3>Types of bear</h3>
            <p>
              Bears come in two varieties — large and medium. You don't get small bears.
              If you have seen a small bear, then it was in fact probably a baby bear (cub)
              from another species.
            </p>
            <p>
              Bears can also be classified in terms of their habitat — both large and medium bears
              are just as at home in urban areas as they are in the countryside. Different habitats
              encourage different behaviour however, as you'll find out below. The below table also
              gives you some useful facts about bears.
            </p>
          <table>
            <caption>Information on different types of bears and their characteristics</caption>
            <thead>
              <tr>
                <th scope="col">Bear Type</th>
                <th scope="col">Coat</th>
                <th scope="col">Adult size</th>
                <th scope="col">Habitat</th>
                <th scope="col">Lifespan</th>
                <th scope="col">Diet</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wild</td>
                <td>Brown or black</td>
                <td>1.4 to 2.8 meters</td>
                <td>Woods and forests</td>
                <td>25 to 28 years</td>
                <td>Fish, meat, plants</td>
              </tr>
              <tr>
                <td>Urban</td>
                <td>North Face</td>
                <td>18 to 22</td>
                <td>Condos and coffee shops</td>
                <td>20 to 32 years</td>
                <td>Starbucks, sushi</td>
              </tr>
            </tbody>
          </table>
          <h3>Habitats and Eating habits</h3>
          <p>
            Wild bears eat a variety of meat, fish, fruit, nuts, and other naturally growing
            ingredients. In general, they will hunt for food themselves in woodland or rivers, but
            at a push, they will track down their sustenance from farms or country houses. They tend
            to live in relative isolation, in caves, tents, or cottages.
          </p>
          <img src={WildBearImage} alt="A wild bear in its natural habitat" />
          <p>
            Urban (gentrified) bears, on the other hand, have largely abandoned the old ways. They
            will hunt other urban creatures if necessary (including other predators like rats and
            foxes) but prefer to scavenge from readily available urban food outlets like dumpsters,
            bins, and fast-food joints. When food has proven scarce, urban bears have even been
            known to break into people's kitchens and steal essentials like baked beans, ready
            meals, and microwave ovens.
          </p>
          <img src={UrbanBearImage} alt="An urban bear in a city environment" />
          <p>
            Urban bears will sleep anywhere they can, from bus shelters and parks to the toilets in
            McDonalds, to their own apartment.
          </p>
          <h3>Mating Rituals</h3>
          <p>
            Bears are romantic creatures by nature and will naturally look for a mate that they can
            spend the rest of their lives with. They will woo a potential suitor by making their
            dwelling look attractive — for example, with cave paintings or a bed of reeds in the
            case of a wild bear, and mood lighting and a Michael Bublé CD in the case of an urban
            bear.
          </p>
          <p>
            The following audio clip contains a fact file providing more details about bear mating
            rituals, along with samples and quotes from experts.
          </p>
          <AudioPlayer />
          <Author />
          <CommentsSection />
          <MoreBears />
        </section>
      </article>
  );
}

export default Article;
