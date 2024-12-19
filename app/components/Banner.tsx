'use client'
import { Button, Container, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import Image from 'next/image';

interface Props {
  onButtonClick: () => void; 
}

const Banner = ({onButtonClick}: Props) => {

  return (
    <section>
      <Container>
        <Grid columns={{initial: "1", sm: "2"}} gap="5" align={'center'}>
          <Flex direction="column"  gap="5">
            <Heading color='brown' size={'9'} weight={'bold'}>Find Your Perfect Coffee</Heading>
            <Text  as='p' size={'5'} className='text-white'>Explore a wide range of coffees, from bold brews to smooth blends, tailored just for you.</Text>
            <Button size={'4'} variant='surface' onClick={onButtonClick}>Start Your Search</Button>
          </Flex>
          <Flex>
            <Image src="/images/coffee-beans.png" alt="Coffee beans" width={500} height={500}/>
          </Flex>
        </Grid>
      </Container>
    </section>
  )
}

export default Banner