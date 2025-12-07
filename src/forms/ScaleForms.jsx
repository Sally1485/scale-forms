import React, { useState } from 'react';
import Form from '@rjsf/mui';
import validator from '@rjsf/validator-ajv8';
import { CssBaseline, Container, Paper, Typography, Divider, Box, Button } from '@mui/material';

export default function Scaleforms() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  // Define steps for navigation
  const sections = [
    { key: 'endurancePurpose', title: 'Endurance Purpose' },
    { key: 'connectedClients', title: 'Connected Clients' },
  ];

  const schema = {
    type: 'object',
    title: 'Scale Readiness Form',
    properties: {
      endurancePurpose: {
        type: 'object',
        title: 'Endurance Purpose',
        properties: {
          q1: {
            type: 'object',
            title: "1. You have clearly articulated and documented the magnitude of the BIG PROBLEM(s) your company solves",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },
          q2: {
            type: 'object',
            title: "2. You have analyzed and clearly understand the root causes of the Big Problem your company solves",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },
          q3: {
            type: 'object',
            title: "3. Your vision & mission are well-understood and shared by all major operating units within your organization",
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },
          q4: {
            type: 'object',
            title: '4. Solution Testing',
            description: 'Your solution has been well tested with analysis of outcomes',
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },
        },
      },

      connectedClients: {
        type: 'object',
        title: 'Connected Clients',
        properties: {
          q1: {
            type: 'object',
            title: '1. You have clearly defined and articulated your primary customer segment(s), and they are distinct & findable',
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },
          q2: {
            type: 'object',
            title: '2. You are aware of the contributions from each customer segment, and know the segments that contribute most to profitability',
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },
          q3: {
            type: 'object',
            title: '3. You have targeted offerings, messaging, features and distribution means most appropriate for each segment',
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },
          q4: {
            type: 'object',
            title: '4. You have stable or growing customer segments representing significant demand',
            properties: {
              rating: { type: 'number', title: 'Rating (0–5)' },
              comment: { type: 'string', title: 'Comment' },
            },
          },
        },
      },
    },
  };

  const uiSchema = {
    endurancePurpose: {
      q1: { rating: { 'ui:widget': 'updown' }, comment: { 'ui:widget': 'textarea' } },
      q2: { rating: { 'ui:widget': 'updown' }, comment: { 'ui:widget': 'textarea' } },
      q3: { rating: { 'ui:widget': 'updown' }, comment: { 'ui:widget': 'textarea' } },
      q4: { rating: { 'ui:widget': 'updown' }, comment: { 'ui:widget': 'textarea' } },
    },
    connectedClients: {
      q1: { rating: { 'ui:widget': 'updown' }, comment: { 'ui:widget': 'textarea' } },
      q2: { rating: { 'ui:widget': 'updown' }, comment: { 'ui:widget': 'textarea' } },
      q3: { rating: { 'ui:widget': 'updown' }, comment: { 'ui:widget': 'textarea' } },
      q4: { rating: { 'ui:widget': 'updown' }, comment: { 'ui:widget': 'textarea' } },
    },
  };

  // Navigation handlers
  const handleNext = (data) => {
    setFormData({ ...formData, [sections[currentStep].key]: data.formData });
    setCurrentStep((prev) => Math.min(prev + 1, sections.length - 1));
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
    window.scrollTo(0, 0);
  };

  const handleSubmit = () => {
    console.log('Final form data:', formData);
    alert('Submitted successfully!');
  };

  const step = sections[currentStep];

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Paper elevation={4} sx={{ p: 5, borderRadius: 3 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            Scale Readiness Form
          </Typography>
          <Divider sx={{ mb: 4 }} />
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              {step.title}
            </Typography>
          </Box>
          <Form
            schema={{ type: 'object', properties: { [step.key]: schema.properties[step.key] } }}
            validator={validator}
            uiSchema={{ [step.key]: uiSchema[step.key] }}
            formData={{ [step.key]: formData[step.key] || {} }}
            onSubmit={currentStep === sections.length - 1 ? handleSubmit : handleNext}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
              {currentStep > 0 && (
                <Button variant="contained" color="secondary" onClick={handleBack}>
                  Previous
                </Button>
              )}
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ ml: 'auto' }}
              >
                {currentStep === sections.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </Box>
          </Form>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
