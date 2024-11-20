import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  align-items: center;
  padding: 6em 5px;
  background-color: #CAF5FF;
  margin-bottom: 150px;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  width: 500px;
  margin-right: 3em;
  padding-left: 100px;
`;

const Heading = styled.h2`
  color: #000;
  font-size: 32px;
  font-weight: 900;
`;

const Paragraph = styled.p`
  font-size: 20px;
  margin-right: 3em;
`;

const GradasiAtas = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background: linear-gradient(to bottom, #ffffff, transparent);
  z-index: 1;
`;

const GradasiBawah = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background: linear-gradient(to top, #ffffff, transparent);
  z-index: 1;
`;

function AboutProActive() {
  return (
    <Section id="tentang proactive">
      <GradasiAtas />
      <Image src="/assets/svg/gambar2.svg" alt="About ProActive" />
      <div>
        <Heading>Apa itu ProActive?</Heading>
        <Paragraph>
          ProActive adalah platform produktivitas yang membantu kamu menyusun dan menyelesaikan setiap tugas dengan mudah. Dengan fitur to-do list yang sederhana namun kuat, ProActive mempermudah perencanaan harian hingga pengelolaan proyek besar.
        </Paragraph>
      </div>
      <GradasiBawah />
    </Section>
  );
}

export default AboutProActive;
