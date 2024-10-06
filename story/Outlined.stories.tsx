import { type Meta, type StoryObj } from '@storybook/react';

import { Outlined } from '../src';

const meta = {
  component: () => {
    return (
      <>
        <h1>Outlined</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae error
          aperiam labore eligendi odit ut repellat veniam et perferendis.
          Dolores cupiditate et facere eligendi porro distinctio qui corrupti
          repellat saepe?
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aperiam
          adipisci totam aspernatur sit facilis commodi soluta, fugiat numquam
          ipsum possimus doloribus eaque veritatis a, perferendis animi,
          asperiores rerum esse?
        </p>

        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            atque ab totam quisquam aut vel saepe soluta officiis tempore quo
            animi iure nemo similique sapiente, repudiandae labore, iste quod
            voluptatibus.
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad odio
            illum eius quae id rerum libero officiis beatae totam minima,
            numquam quam obcaecati est sunt. Similique consequatur fuga ullam
            dicta!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            rem, magni illo obcaecati neque quasi eum ipsam, omnis
            exercitationem temporibus explicabo magnam sit iste ad non enim
            corrupti, minus dolore.
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis,
            deserunt veritatis corrupti similique commodi molestias libero iste
            autem aut aspernatur iusto corporis quod qui suscipit dolore
            cupiditate ullam quaerat? Delectus?
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            voluptate veniam odio a voluptas ea nesciunt aliquam rerum,
            delectus, distinctio totam sequi ab obcaecati accusamus amet unde
            rem consequatur porro.
          </li>
        </ul>

        <Outlined />
      </>
    );
  },
  title: 'Outlined',
} satisfies Meta<typeof Outlined>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base = {} satisfies Story;
