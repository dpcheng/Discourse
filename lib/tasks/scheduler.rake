namespace :db do
  desc "Drop all tables (except schema_migrations)"
  task :delete_everything => :environment do
    ActiveRecord::Base.connection.tables.each do |table|
      if table != 'schema_migrations'
        query = "DROP TABLE IF EXISTS #{table} CASCADE;"
        ActiveRecord::Base.connection.execute(query)
      end
    end
  end
end
