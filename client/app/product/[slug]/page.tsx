import Link from "next/link";
import Image from "next/image";

import {
  AspectRatio,
  Button,
  Textarea,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { XIcon } from "lucide-react";

import manPng from "@/assets/man.png";

const product = {
  name: "Tittle of the product",
  description: `
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur laboriosam suscipit cum placeat, recusandae adipisci dolorum eum nemo neque maiores id, unde iure. Quibusdam accusantium natus, et ducimus distinctio dolore.
Distinctio architecto illum ab nesciunt repellendus excepturi asperiores accusantium eaque illo. Distinctio consequuntur at tempore iusto voluptas ipsum, magnam est nam saepe, dignissimos dolore nemo ad quisquam numquam! Vero, repellendus!
Aliquid quia quis similique repudiandae, aut laboriosam, ipsam dolores sint, voluptate recusandae impedit officiis amet. Temporibus amet ducimus et id, laboriosam ex error quam non ullam eum, dolorem itaque praesentium?
Debitis praesentium rem dicta officia harum obcaecati voluptatem natus nemo! Architecto autem ad dignissimos ex totam nostrum earum quod impedit alias nobis! Illum dolor minima tempore debitis nulla sunt aspernatur?
Porro facilis animi ex sed tenetur itaque voluptatibus reprehenderit esse doloribus suscipit magnam, dolorum, ea aut totam recusandae praesentium ipsum sapiente qui quaerat velit! Tempora qui doloremque rerum obcaecati libero.
Modi sed doloribus, repudiandae sunt quam corrupti, ipsum numquam tempora culpa blanditiis accusantium quia. Sit, qui. Magni nobis saepe natus tenetur recusandae! Asperiores atque maxime delectus deserunt repudiandae, eligendi odit.
Placeat voluptatibus doloremque minus ducimus officia dolorem magnam dignissimos! Fuga dicta consectetur iste doloribus numquam, facere tempora culpa odio placeat ducimus, voluptatum in praesentium aliquam perspiciatis nihil! Totam, culpa perspiciatis.
Cupiditate laborum molestias rerum eum? Similique omnis velit quos aperiam voluptates eaque soluta itaque enim laborum blanditiis deleniti debitis, reiciendis veritatis officia obcaecati non, voluptas quidem placeat nostrum dignissimos error.
Laborum eius dolore fugiat, fuga vel, nihil provident nulla minus harum rem odit, distinctio hic dolorum eveniet delectus amet dolor debitis. Omnis velit rerum rem cupiditate aut quos, esse fugiat!
Rerum animi iusto earum adipisci doloribus explicabo porro quibusdam cum consequuntur voluptas perferendis, natus fuga quo expedita dolorem dolores molestias dolor, temporibus impedit. Quas enim est a pariatur odit blanditiis!
Explicabo eaque rem omnis distinctio incidunt eos, quaerat, quis consequatur architecto aperiam corrupti! Eius eveniet officiis maiores sunt ipsa quae quo atque fugiat cumque quibusdam fuga quisquam, dolores quasi tempore.
Nobis delectus facere recusandae corrupti, consequatur accusantium? Necessitatibus sint quisquam quidem minus. Explicabo minima fugit dignissimos sint velit. Quam ex deleniti asperiores nostrum iste fugiat enim impedit eum quasi non.
Ratione minus corrupti modi alias mollitia incidunt, porro repellat repudiandae totam delectus dolore explicabo nemo obcaecati nesciunt illum, ea laboriosam culpa quas deserunt dicta, optio nisi autem molestias! Minima, quia.
Consectetur ducimus delectus obcaecati doloremque rerum vero culpa ullam dolorem numquam quod maxime hic sint, eveniet totam exercitationem assumenda omnis aperiam consequatur explicabo quae atque voluptatum impedit? Laudantium, sint beatae.
Commodi vitae et amet sed neque odit, consequatur a dolore rerum quam fuga, inventore libero voluptatibus architecto voluptas placeat saepe minus rem expedita corrupti dolor laboriosam blanditiis? Quod, numquam commodi!
Sapiente a autem velit iusto magnam. Deserunt ad distinctio ut ipsa voluptatem labore sed id dolores beatae, rem molestias doloribus quibusdam laudantium nihil obcaecati alias nisi voluptatum necessitatibus natus harum.
Quisquam ea dolorum omnis saepe natus distinctio ullam iusto a repellat. Blanditiis facere atque labore, dicta aspernatur animi. Magnam corrupti non aliquid amet distinctio commodi. Voluptate ipsam iusto perspiciatis voluptas.
Neque veniam possimus ducimus eveniet similique, cupiditate hic officia eligendi animi delectus beatae in ab, pariatur consectetur rerum laudantium quas numquam facilis autem minima expedita nesciunt atque? Excepturi, ipsam dolores.
Saepe distinctio quod, ab porro nulla maiores dolorum amet nisi voluptatibus rem obcaecati pariatur recusandae! Sunt, nobis ipsam! Quasi, similique quo magnam minima iure dolores vel ut veniam ea dignissimos!
Praesentium, non asperiores beatae, cupiditate nesciunt maxime consectetur odio earum saepe totam est facere laborum cum illo quam eveniet, quasi explicabo harum tempora ea molestiae. Totam amet assumenda quo distinctio.`,
  id: 1,
  image: manPng,
  price: 99.99,
};

export default function Product() {
  return (
    <main className="flex gap-4 flex-col min-h-screen items-center justify-between pt-10">
      <div className="w-[70%] relative grid grid-cols-3 gap-4 border py-4 px-8 rounded-lg  ">
        <Button
          className="absolute bottom-2 right-2"
          variant="ghost"
          size="icon"
          asChild
        >
          <Link href="/">
            <XIcon className="w-4 h-4" />
          </Link>
        </Button>

        <div className="flex flex-wrap gap-2">
          <div className="w-[20%] cursor-pointer">
            <AspectRatio ratio={6 / 9}>
              <Image
                className="object-cover border-2 border-input shadow-md rounded-md h-full"
                src={product.image}
                alt="product_image"
              />
            </AspectRatio>
          </div>
          <div className="w-[20%] cursor-pointer">
            <AspectRatio ratio={6 / 9}>
              <Image
                className="object-cover border-2 border-input shadow-md rounded-md h-full"
                src={product.image}
                alt="product_image"
              />
            </AspectRatio>
          </div>
          <div className="w-[20%] cursor-pointer">
            <AspectRatio ratio={6 / 9}>
              <Image
                className="object-cover border-2 border-input shadow-md rounded-md h-full"
                src={product.image}
                alt="product_image"
              />
            </AspectRatio>
          </div>
          <div className="w-[20%] cursor-pointer">
            <AspectRatio ratio={6 / 9}>
              <Image
                className="object-cover border-2 border-input shadow-md rounded-md h-full"
                src={product.image}
                alt="product_image"
              />
            </AspectRatio>
          </div>
          <div className="w-[20%] cursor-pointer">
            <AspectRatio ratio={6 / 9}>
              <Image
                className="object-cover border-2 border-input shadow-md rounded-md h-full"
                src={product.image}
                alt="product_image"
              />
            </AspectRatio>
          </div>
          <div className="w-[20%] cursor-pointer">
            <AspectRatio ratio={6 / 9}>
              <Image
                className="object-cover border-2 border-input shadow-md rounded-md h-full"
                src={product.image}
                alt="product_image"
              />
            </AspectRatio>
          </div>

          <div className="w-[20%] cursor-pointer">
            <AspectRatio ratio={6 / 9}>
              <Image
                className="object-cover border-2 border-input shadow-md rounded-md h-full"
                src={product.image}
                alt="product_image"
              />
            </AspectRatio>
          </div>
          <div className="w-[20%] cursor-pointer">
            <AspectRatio ratio={6 / 9}>
              <Image
                className="object-cover border-2 border-input shadow-md rounded-md h-full"
                src={product.image}
                alt="product_image"
              />
            </AspectRatio>
          </div>
          <div className="w-[20%] cursor-pointer">
            <AspectRatio ratio={6 / 9}>
              <Image
                className="object-cover border-2 border-input shadow-md rounded-md h-full"
                src={product.image}
                alt="product_image"
              />
            </AspectRatio>
          </div>
          <div className="w-[20%] cursor-pointer">
            <AspectRatio ratio={6 / 9}>
              <Image
                className="object-cover border-2 border-input shadow-md rounded-md h-full"
                src={product.image}
                alt="product_image"
              />
            </AspectRatio>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start border-r">
          <div className="w-[70%]">
            <AspectRatio ratio={6 / 9}>
              <Image
                className="object-cover border-2 border-input shadow-md rounded-md h-full"
                src={product.image}
                alt="product_image"
              />
            </AspectRatio>
          </div>

          <h3 className="text-2xl font-semibold">{product.name}</h3>
          <p>${product.price}</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a color" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Red</SelectItem>
                  <SelectItem value="banana">Black</SelectItem>
                  <SelectItem value="blueberry">White</SelectItem>
                  <SelectItem value="grapes">Blue</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a size" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">XS</SelectItem>
                  <SelectItem value="banana">S</SelectItem>
                  <SelectItem value="blueberry">M</SelectItem>
                  <SelectItem value="grapes">L</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Button className="bg-black">Add to cart</Button>

          <div className="border"></div>

          <Textarea
            className="h-60 resize-none"
            value={product.description}
            readOnly
          />
        </div>
      </div>
    </main>
  );
}
