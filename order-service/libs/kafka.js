const kafka = require('kafka-node');

const config = require('../config');

const Producer = kafka.Producer;

export const sendKafkaMessage = (topic, message) => {
  return new Promise((resolve, reject) => {
    let client = new kafka.Client(config.KAFKA_SERVER);
    let producer = new Producer(client, { requireAcks: 1 });

    producer.on('ready', () => {
      producer.createTopics([topic], true, (err, topicCreated) => {
        if (err) {
          reject(err);
        }

        producer.send(
          [
            {
              topic: topic,
              partition: 0,
              messages: [JSON.stringify(message)],
              attributes: 0
            }
          ],
          (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
    });

    producer.on('error', err => {
      reject(err);
    });
  });
};
